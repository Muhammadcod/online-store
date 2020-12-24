import {
  CREATE_PRODUCT,
  CREATE_PRODUCT_ERROR,
  RECIEVE_PRODUCTS,
} from '../actions/actionTypes'

const initState = {}

export default function products(state = initState, action) {
  switch (action.type) {
    case RECIEVE_PRODUCTS:
      return {
        ...state,
        ...action.products,
      }
    case CREATE_PRODUCT:
      console.log('create product', action.type)
      return state
    case CREATE_PRODUCT_ERROR:
      console.log('create product error', action.type)
      return state
    default:
      return state
  }
}
