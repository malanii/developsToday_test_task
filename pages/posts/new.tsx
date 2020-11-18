import MainLayout from "../../components/mainLayout/MainLayout";
import styled from 'styled-components';
import {addPost, unAdded} from "../../redux/actions/postsActions";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {Post} from "../../interfaces/post";
const Input = styled.input.attrs(props => ({
    type: "text",
    size: props.size || "1rem",
}))`
&:focus {
    outline: #6cb9c7;
     border-color: #6cb9c7;
  } 
  border: 2px solid palevioletred;
  width: 100%;
  margin-bottom: 1rem;
  box-sizing: border-box;
  padding: ${props => props.size};
  margin-top: ${props => props.size};
`;
const Form = styled.form`
display:block;
width:60%;
padding-top:3rem;
text-align:center;
margin: 0 auto;
box-sizing:border-box;
`;
const ButtonForm = styled.button`
&:focus {
    outline: none;
  } color: white;
 font-size: 1em;
 border: 2px solid palevioletred;
 border-radius: 30px;
 background-color: palevioletred;
 padding: 1rem 2rem;
 
`;
const Label = styled.label`
color: palevioletred;
font-size: 1rem;
font-weight:bold;
`;
const ErrorMessage = styled.p`
  &:before {
    content: "🦄";
  }
  color: #6cb9c7;
  font-weight: bold;
`;
const Message = styled.h1`
text-align:center;
color:#6C6378;
font-weight: bold;
margin-top:3rem;
`;
export default function AddPost() {
    const {register, handleSubmit, errors} = useForm<Post>();
    const dispatch = useDispatch();
    const addedPost = useSelector(state => state.posts.newPost);
    const onSubmit = (data:Post, e) => {
        dispatch(addPost(data));
        e.target.reset();
        setTimeout(() => {
            dispatch(unAdded(false))
        }, 5000)
    };

    if (addedPost) {
        return (
            <MainLayout>
                <Message>Congratulations! You have just added new post :)</Message>
            </MainLayout>
        )
    }
    return (
        <MainLayout title={"Add Post"}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Label>Title</Label>
                {errors.title && <ErrorMessage>This field is required</ErrorMessage>}
                <Input type="text" name="title" ref={register({required: true})}/>

                <Label>Description</Label>
                {errors.body && <ErrorMessage>This field is required</ErrorMessage>}
                <Input type="text" name="body" ref={register({required: true, min: 10})}/>
                <ButtonForm type="submit">Send</ButtonForm>
            </Form>
        </MainLayout>
    )
}

