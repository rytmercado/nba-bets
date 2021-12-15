import { RECEIVE_CURRENT_USER, 
         RECEIVE_USER_LOGOUT, 
         RECEIVE_USER_SIGN_IN,
        RECEIVE_USER } from '../actions/session_actions';
        

const initialState = {
  isAuthenticated: false,
  user: {}
};

const sessionReducer = (state = initialState, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        user: action.currentUser,
      };
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined
      };
    case RECEIVE_USER_SIGN_IN:
      return {
        ...state,
        isAuthenticated: true,
        isSignedIn: true,
        user: {
          id: action.currentUser.data._id,
          handle: action.currentUser.data.handle,
          email: action.currentUser.data.email,
          currency: action.currentUser.data.currency
        }
      }
    case RECEIVE_USER:
      let userInfo
      if(action.user.data === undefined) {
        userInfo = action.user
      } else {
        userInfo = action.user.data
      }
      return {
        ...state,
        isAuthenticated: !!action.user,
        isSignedIn: true,
        user: userInfo,
      };

    default:
      return state;
  }
}

export default sessionReducer;