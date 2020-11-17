// import {HYDRATE} from "next-redux-wrapper";
import {State} from '../../interfaces/state'
import {AnyAction} from "redux";

const initialState:State ={
    posts:[],
    newPost: false
};

export const postsReducer = (state: State = initialState, action: AnyAction) => {
    switch (action.type) {
        // case HYDRATE:
        //     if (action.payload.posts === []) delete action.payload.posts;
        //     return { ...state, ...action.payload};
        case 'GET_POSTS':
            return {...state, posts: action.payload};
        case 'UNADDED_POST':
            return {...state, newPost: action.payload};
        case 'ADD_POST_SUCCESSFUL':
            return {...state, newPost: action.payload};
        default:
            return state;
    }
};