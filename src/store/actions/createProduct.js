import { CREATE_PRODUCT, CREATE_PRODUCT_ERROR } from './actionTypes'

export function createProduct(product) {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    firestore
      .collection('products')
      .add({
        ...product,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({
          type: CREATE_PRODUCT,
          product,
        })
      })
      .catch((err) => {
        dispatch({
          type: CREATE_PRODUCT_ERROR,
          err,
        })
      })
  }
}
