import { CREATE_PRODUCT, CREATE_PRODUCT_ERROR } from '../actions/actionTypes'

const initState = {
  products: [
    {
      id: 1,
      title: 'shirt',
      price: 50,
    },
    {
      id: 2,
      title: 'shirt',
      price: 60,
    },
    {
      id: 3,
      title: 'shirt',
      price: 70,
    },
  ],
}
export default function products(state = initState, action) {
  switch (action.type) {
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
