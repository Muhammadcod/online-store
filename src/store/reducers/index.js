import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import authUser from './authUser'
import products from './products'

export default combineReducers({
  authUser,
  products,
  firestore: firestoreReducer,
})
