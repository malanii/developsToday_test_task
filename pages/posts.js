import Link from "next/link";
import {useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
import axios from "axios";
import styled from 'styled-components';

const PostsList = styled.ul`
display: flex;
width: 70%;
margin: 0 auto;
flex-wrap:wrap;
`;
const PoslLink = styled.li`
list-style-type: none;
 margin: 0.5rem;
  padding: 0.5rem 1rem;
  text-underline:none;
background-color: #6C6378;
 border-radius: 30px;
`;
const WhiteText = styled.a`
text-decoration: none;
 color: white;
 cursor:pointer;
`;
const PostTitle = styled.h1`
text-align:center;
color:#6C6378;
font-weight: bold;
margin-top:0;
`;

export default function Posts({posts: serverPosts}) {
    const [posts, setPosts] = useState(serverPosts);
    useEffect(() => {
        async function load() {
            const response = await axios.get('https://simple-blog-api.crew.red/posts');
            const json = response.data;
            setPosts(json)
        }
        if (!serverPosts) {
            load()
        }
    }, []);
    if (!posts) {
        return (
            <>
                <p>Loading.....</p>
            </>
        )
    }

    return (
        <>
            <PostTitle>All Posts</PostTitle>
            <PostsList>
                {posts.map(post => {
                        if (post.title && post.id && post.body) {
                            return (
                                <PoslLink key={post.id}>
                                    <Link href={'/posts/[id]'} as={`/posts/${post.id}`}><WhiteText>{post.title}</WhiteText></Link>
                                </PoslLink>
                            )
                        }
                    }
                )}
            </PostsList>
        </>
    )
}

Posts.getInitialProps = async ({req}) => {
    if (!req) {
        return {
            posts: null
        }
    }
    const allPosts = useSelector(state => state.posts.posts);
    const {posts} = allPosts;
    return {
        posts
    }
};

