import Link from "next/link";
import {NextPage} from 'next';
import {useSelector} from 'react-redux';
import {useState, useEffect} from 'react';
import axios from "axios";
import styled from 'styled-components';
import {Post} from '../interfaces/post';

const List = styled.ul`
display: flex;
justify-content:center;
width: 80%;
margin: 0 auto;
flex-wrap:wrap;
padding-left:0;
 @media (max-width: 1050px) {
 width:90%
 }
`;
const ListLink = styled.li`
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
const Title = styled.h1`
text-align:center;
color:#6C6378;
font-weight: bold;
margin-top: 1rem;
`;
export default function Posts() {
    const [posts, setPosts] = useState<Post[]>();
    useEffect(() => {
        async function load() {
            const response = await axios.get('https://simple-blog-api.crew.red/posts');
            const json = response.data as Post[];
            setPosts(json)
        }
            load()
    }, []);
    if (!posts as boolean) {
        return (
            <>
                <Title>Loading.....</Title>
            </>
        )
    }
    return (
        <>
            <Title>All Posts</Title>
            <List>
                {posts.map((post:Post) => {
                        if (post.title && post.id && post.body) {
                            return (
                                <ListLink key={post.id}>
                                    <Link href={'/posts/[id]'} as={`/posts/${post.id}`}><WhiteText>{post.title}</WhiteText></Link>
                                </ListLink>
                            )
                        }
                    }
                )}
            </List>
        </>
    )
};

