import { RECIEVE_CART } from '../actions/actionTypes'

const initState = {}

export default function cart(state = initState, action) {
  switch (action.type) {
    case RECIEVE_CART:
      return {
        ...state,
        ...action.products,
      }
    default:
      return state
  }
}
