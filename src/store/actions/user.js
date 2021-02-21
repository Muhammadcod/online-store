// import firebase from 'firebase'
import { RECIEVE_CART, SIGNUP_ERROR, SIGNUP_SUCCESS } from './actionTypes'

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
export function addToUserCart() {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    const db = firebase.firestore()

    firebase.auth
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((r) =>
        firestore
          .collection('users')
          .add(r.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: newUser.firstName[0] + newUser.lastName[0],
          }),
      )
      .then(() => {
        dispatch({
          type: SIGNUP_SUCCESS,
        })
      })
      .catch((error) => {
        dispatch({
          type: SIGNUP_ERROR,
          error,
        })
      })
  }
}
