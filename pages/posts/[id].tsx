import MainLayout from "../../components/mainLayout/MainLayout";
import {useRouter} from "next/router";
import {useState, useEffect} from 'react';
import axios from "axios";
import styled from 'styled-components';
import {Post} from "../../interfaces/post";

const PostTitle = styled.h1`
text-align:center;
color:#6C6378;
font-weight: bold;
`;
const PostText = styled.p`
text-align:center;
color:#6C6378;
`;
const Wrapper = styled.div`
width:80%;
margin:0 auto;
`;
interface PostPageProps {
    post: Post
}
export default function MyPost({post:serverPost}:PostPageProps) {
    const router = useRouter();
    const [post, setPosts] = useState(serverPost);
    useEffect(() => {
        async function load() {
            const response = await fetch(`https://simple-blog-api.crew.red/posts/${router.query.id}`);
            const json = await response.json();
            setPosts(json)
        }
        if(!serverPost){
            load()
        }

    }, []);

    if(!post){
        return (
            <>
                <p>Loading.....</p>
            </>
        )
    }
    return (
        <MainLayout title={`Post ${router.query.id}`}>
            <Wrapper>
                <PostTitle>{post.title}</PostTitle>
                <PostText>{post.body}</PostText>
            </Wrapper>

        </MainLayout>
    )
}
MyPost.getInitialProps = async ({req}) => {
    if (!req) {
        return {
            post: null
        }
    }
    const response = await axios.get('https://simple-blog-api.crew.red/posts');
    const post = response.data;
    return {
        post
    }
};