import MainLayout from "../../components/mainLayout/MainLayout";
import styled from 'styled-components';
import React from "react";
import {useState} from 'react';
import {addPost} from "../../redux/actions/postsAction";
import {useDispatch} from "react-redux";

const Input = styled.input.attrs(props => ({
    type: "text",
    size: props.size || "5px",
}))`
  border: 2px solid palevioletred;
  width: 100%;
  margin: ${props => props.size};
  padding: ${props => props.size};
`;
const Form = styled.form.attrs(props => ({
    onSubmit: props
}))`
padding-top: 10rem;
width:60%;
text-align:center;
margin: 0 auto;
box-sizing:border-box;
`;
const ButtonForm = styled.button`
  color: white;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background-color: palevioletred;
 padding: 10px 15px;
`;
const Title = styled.h1`
color: palevioletred;
`;

export default function AddPost(ctx) {
    const [inputs, setInputs] = useState('');
    const changeHandler = (event) => {
        setInputs({...inputs, [event.target.name]: event.target.value})
    };
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addPost(inputs));
        // console.log('yesssss it worksssss')
    };

    // console.log(inputs);
    return (
        <MainLayout title={"Add Post"}>
            <form onSubmit={handleSubmit}>
                <Title>We are waiting for your post :)</Title>
                <Input name='title' value={inputs.title} onChange={changeHandler} placeholder="Add title"/>
                <Input name='body' value={inputs.body} onChange={changeHandler} placeholder="Add Description"/>
                <ButtonForm type='submit'>Add Post</ButtonForm>
            </form>
        </MainLayout>
    )
}
