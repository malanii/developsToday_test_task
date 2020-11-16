import axios from "axios";
import * as types from '../types';



export const getPosts = () => dispatch =>
    axios.get(`https://simple-blog-api.crew.red/posts`)
        .then(response => dispatch({ type:  'GET_POSTS', payload: response.data }));

export const successfulAdded = (boolean)=>{
    return {
        type: 'ADD_POST_SUCCESSFUL',
        payload: boolean
    }

};

export const unSuccessfulAdded = (boolean)=>{
    return {
        type: 'ADD_POST_UNSUCCESSFUL',
        payload: boolean
    }

};

export const addPost = (post) => dispatch=> {
    axios.post(`https://simple-blog-api.crew.red/posts`, post)
        .then(response =>
            console.log('action response', response),
            dispatch(successfulAdded(true))

        );
};