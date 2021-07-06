import {actionTypes} from './../constants/ActionTypes'
export function reducer(state, action) {
  switch (action.type) {
    case actionTypes.SIGN_UP: {
      return {
        ...state,
        userId: action.userId,
        isLoggedIn: true,
      };
    }
    case actionTypes.SIGN_IN: {
      return {
        ...state,
        userId: action.userId,
        isLoggedIn: true,
      };
    }
    case actionTypes.SIGN_OUT: {
      return {
        ...state,
        userId: null,
        isLoggedIn: false,
      };
    }
    default:
      return state;
  }
}