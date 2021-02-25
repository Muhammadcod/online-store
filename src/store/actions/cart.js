import {
  ADD_PRODUCT_TO_CART,
  RECIEVE_CART_ITEMS,
  ADD_PRODUCT_TO_CART_ERROR,
} from './actionTypes'

export function receiveCartItems(cartItems) {
  return {
    type: RECIEVE_CART_ITEMS,
    cartItems,
  }
}

export function addProductToCart(item) {
  return {
    type: ADD_PRODUCT_TO_CART,
    item,
  }
}

export function addProductToCartError(err) {
  return {
    type: ADD_PRODUCT_TO_CART_ERROR,
    err,
  }
}

export function handleAddProductToCart(item) {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    const firestore = firebase.firestore()
    const authorId = getState().firebase.auth.uid
    const { firstName, lastName } = getState().firebase.profile
    firestore
      .collection('cart')
      .doc(item.id)
      .set({
        ...item,
        authorId,
        firstName,
        lastName,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch(addProductToCart(item))
      })
      .catch((err) => {
        dispatch(addProductToCartError(err))
      })
  }
}

export function handleCartData() {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    const db = firebase.firestore()

    db.collection('cart')
      .get()
      .then((snapshot) => {
        const cartItems = []

        snapshot.forEach((doc) => {
          const currentID = doc.id
          const appObj = { ...doc.data(), id: currentID }
          cartItems.push(appObj)
        })
        dispatch(receiveCartItems(cartItems))
      })
  }
}
