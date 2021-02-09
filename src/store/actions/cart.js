// import firebase from 'firebase'
import { RECIEVE_CART } from './actionTypes'

export function receiveCart(cart) {
  return {
    type: RECIEVE_CART,
    cart,
  }
}

export function getCart() {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    const db = firebase.firestore()

    db.collection('cart')
      .get()
      .then((snapshot) => {
        const cart = []

        snapshot.forEach((doc) => {
          const currentID = doc.id
          const appObj = { ...doc.data(), id: currentID }
          cart.push(appObj)
        })
        dispatch(receiveCart(cart))
      })
  }
}
export function addToCart() {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    const db = firebase.firestore()

    db.collection('cart')
      .get()
      .then((snapshot) => {
        const cart = []

        snapshot.forEach((doc) => {
          const currentID = doc.id
          const appObj = { ...doc.data(), id: currentID }
          cart.push(appObj)
        })
        dispatch(receiveCart(cart))
      })
  }
}
