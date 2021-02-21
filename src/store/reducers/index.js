import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import authUser from './authUser'
import products from './products'
import filter from './filter'
import cart from './cart'

export default combineReducers({
  authUser,
  products,
  filter,
  cart,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
})
