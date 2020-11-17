import MainLayout from "../../pages/posts/new";
import styled from 'styled-components';
const Title = styled.h1`
text-align:center;
color:#6C6378;
font-weight: bold;
`;
export default function PostMessage() {
    return(
        <MainLayout>
            <Title>Congratulations! You have just added new post :)</Title>
        </MainLayout>
    )
}