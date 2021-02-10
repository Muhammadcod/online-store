import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
} from '../actions/actionTypes'

const initialState = {
  authError: null,
}

export default function authUser(state = initialState, action) {
  switch (action.type) {
    case LOGIN_ERROR:
      return {
        ...state,
        authError: 'Login failed',
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        authError: null,
      }
    case SIGNOUT_SUCCESS:
      console.log('signout success')
      return state
    case SIGNUP_SUCCESS:
      return {
        ...state,
        authError: null,
      }
    case SIGNUP_ERROR:
      return {
        ...state,
        authError: action.error.message,
      }
    default:
      return state
  }
}
