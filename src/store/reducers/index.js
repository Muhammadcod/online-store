import { combineReducers } from 'redux'
import authUser from './authUser'
import products from './products'

export default combineReducers({
  authUser,
  products,
})
