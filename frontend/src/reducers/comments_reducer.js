import { RECEIVE_COMMENT, RECEIVE_COMMENTS } from '../actions/comment_actions';

const commentsReducer = (state = [], action) => {
    Object.freeze(state);
    const newState = Array.from(state);

    switch(action.type) {
        case RECEIVE_COMMENT:
            newState.push(action.comment);
            return newState; 
        case RECEIVE_COMMENTS:
            return newState;
    
        default: 
            return state;
    }

}

export default commentsReducer;