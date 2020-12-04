import { CREATE_PRODUCT } from './actionTypes'

export function createProduct(product) {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch({
      type: CREATE_PRODUCT,
      product,
    })
  }
}
