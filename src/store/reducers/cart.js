import {
  ADD_PRODUCT_TO_CART,
  ADD_PRODUCT_TO_CART_ERROR,
  // RECIEVE_CART,
} from '../actions/actionTypes'

const initialState = {
  cartError: null,
}

export default function cart(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      console.log('added to cart successfully')
      return {
        ...state,
        cartError: null,
      }
    case ADD_PRODUCT_TO_CART_ERROR:
      console.log('error adding to cart')
      return {
        ...state,
        cartError: 'failed',
      }
    default:
      return state
  }
}
