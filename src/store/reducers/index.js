import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import authUser from './authUser'
import products from './products'
import filter from './filter'

export default combineReducers({
  authUser,
  products,
  filter,
  firestore: firestoreReducer,
})
