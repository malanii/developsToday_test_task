import axios from "axios";
import * as types from '../types';
import {Post} from "../../interfaces/post";
// import { ActionCreator } from 'redux';

export const getPosts = () => dispatch =>
    axios.get(`https://simple-blog-api.crew.red/posts`)
        .then(response => dispatch({ type:  'GET_POSTS', payload: response.data }));

export const successfulAdded = (boolean:boolean)=>{
    return {
        type: 'ADD_POST_SUCCESSFUL',
        payload: boolean
    }

};

export const unAdded = (boolean:boolean)=>{
    return {
        type: 'UNADDED_POST',
        payload: boolean
    }

};

export const addPost = (post: Post) => dispatch=> {
    axios.post(`https://simple-blog-api.crew.red/posts`, post)
        .then(response =>
            console.log('action response', response),
            dispatch(successfulAdded(true))

        );
};