import { ADD_PRODUCT_TO_CART, CREATE_PRODUCT_ERROR } from './actionTypes'

export function addProductToCart(product) {
  return {
    type: ADD_PRODUCT_TO_CART,
    product,
  }
}

export function handleAddProductToCart(product) {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    const firestore = firebase.firestore()
    const authorId = getState().firebase.auth.uid
    const { firstName, lastName } = getState().firebase.profile
    firestore
      .collection('cart')
      .add({
        ...product,
        firstName,
        lastName,
        id: authorId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch(addProductToCart(product))
      })
      .catch((err) => {
        dispatch({
          type: CREATE_PRODUCT_ERROR,
          err,
        })
      })
  }
}
