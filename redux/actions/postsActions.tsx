import axios from "axios";
import * as types from '../types';
import {Post} from "../../interfaces/post";

export const getPosts = () => {
    return dispatch => {
        axios
            .get(`https://simple-blog-api.crew.red/posts`, )
            .then(res => {
                dispatch(successfulLoaded(res.data));
            })
            .catch(err => {
                dispatch(failedLoaded(false));
            });
    };
};

export const successfulLoaded = (data)=> {
    return{ type:  'SUCCESSFUL_LOADED_POSTS', payload: data}
};

export const failedLoaded = (boolean:boolean)=> {
    return{ type:  'FAILED_LOADED_POSTS', payload: boolean}
};


export const successfulAdded = (boolean:boolean)=>{
    return {
        type: 'ADD_POST_SUCCESSFUL',
        payload: boolean
    }
};
export const unSuccessfulAdded = (boolean:boolean)=>{
    return {
        type: 'ADD_POST_UNSUCCESSFUL',
        payload: boolean
    }

};

export const unAdded = (boolean:boolean)=>{
    return {
        type: 'UNADDED_POST',
        payload: boolean
    }

};

export const addPost = ((post: Post) => {
    return dispatch => {
        axios
            .post(`https://simple-blog-api.crew.red/posts`, post)
            .then(res => {
                dispatch(successfulAdded(res.data));
            })
            .catch(err => {
                dispatch(unSuccessfulAdded(false));
            });
    };
});

