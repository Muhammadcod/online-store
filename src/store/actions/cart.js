import {
  ADD_PRODUCT_TO_CART,
  RECIEVE_CART_ITEMS,
  ADD_PRODUCT_TO_CART_ERROR,
  UPDATE_CART,
  UPDATE_CART_ERROR,
  UPDATE_USER,
  UPDATE_USER_ERROR,
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

export function updateCart(item) {
  return {
    type: UPDATE_CART,
    item,
  }
}

export function updateUser(itemId) {
  return {
    type: UPDATE_USER,
    itemId,
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
    const authorEmail = getState().firebase.auth.email
    const { firstName, lastName } = getState().firebase.profile

    // Add item to cart
    firestore
      .collection('cart')
      .doc(authorEmail)
      .collection('userCartList')
      .doc(item.id)
      .set({
        ...item,
        authorId,
        createdBy: firstName + lastName,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch(updateCart(item))
      })
      .catch((err) => {
        dispatch({
          type: UPDATE_CART_ERROR,
          err,
        })
      })
  }
}

export function handleAddProductToUser(itemId) {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    const firestore = firebase.firestore()
    const authorId = getState().firebase.auth.uid

    // Atomically add a cart id to the user items array field.
    firestore
      .collection('users')
      .doc(authorId)
      .update({
        items: firebase.firestore.FieldValue.arrayUnion(itemId),
      })
      .then(() => {
        dispatch(updateUser(itemId))
      })
      .catch((err) => {
        dispatch({
          type: UPDATE_USER_ERROR,
          err,
        })
      })
  }
}

export function handleUpdateToCart(item) {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    const firestore = firebase.firestore()

    firestore
      .collection('cart')
      .doc(item.id)
      .update({
        itemQuantity: firebase.firestore.FieldValue.increment(
          item.itemQuantity,
        ),
      })
      .then(() => {
        dispatch(addProductToCart(item.itemQuantity))
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
    const authorId = getState().firebase.auth.uid

    db.collection('user')
      .doc(authorId)
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
