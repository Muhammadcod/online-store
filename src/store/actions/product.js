// import firebase from 'firebase'
import {
  CREATE_PRODUCT,
  CREATE_PRODUCT_ERROR,
  RECIEVE_PRODUCTS,
} from './actionTypes'

export function receiveProducts(products) {
  return {
    type: RECIEVE_PRODUCTS,
    products,
  }
}
export function createProducts(product) {
  return {
    type: CREATE_PRODUCT,
    product,
  }
}

export function handleInitialData() {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    const db = firebase.firestore()
    console.log('db', db)
    db.collection('products')
      .get()
      .then((snapshot) => {
        const products = []

        snapshot.forEach((childSnapshot) => {
          products.push({
            ...childSnapshot.data(),
          })
        })

        dispatch(receiveProducts(products))
      })
  }
}

export function createProduct(product) {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore()
    firestore
      .collection('products')
      .add({
        ...product,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch(createProduct(product))
      })
      .catch((err) => {
        dispatch({
          type: CREATE_PRODUCT_ERROR,
          err,
        })
      })
  }
}
