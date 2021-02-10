import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import authUser from './authUser'
import products from './products'
import filter from './filter'
import user from './user'

export default combineReducers({
  authUser,
  products,
  filter,
  cart: user,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
})
