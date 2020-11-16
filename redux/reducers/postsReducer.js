import {HYDRATE} from "next-redux-wrapper";

const initialState ={
    posts:[],
    newPost: false
};

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE:
            if (action.payload.posts === []) delete action.payload.posts;
            return { ...state, ...action.payload};
        case 'GET_POSTS':
            return {...state, posts: action.payload};
        case 'ADD_POST_UNSUCCESSFUL':
            return {...state, newPost: action.payload};
        case 'ADD_POST_SUCCESSFUL':
            return {...state, newPost: action.payload};
        default:
            return state;
    }
};