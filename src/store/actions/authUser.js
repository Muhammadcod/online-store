import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
} from './actionTypes'

export function signIn(credentials) {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({
          type: LOGIN_SUCCESS,
        })
      })
      .catch((error) => {
        dispatch({
          type: LOGIN_ERROR,
          error,
        })
      })
  }
}

export function signOut() {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({
          type: SIGNOUT_SUCCESS,
        })
      })
      .catch((error) => {
        dispatch({
          type: LOGIN_ERROR,
          error,
        })
      })
  }
}

export function signUp(newUser) {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    const firestore = firebase.firestore()

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((r) =>
        firestore
          .collection('users')
          .doc(newUser.email)
          .set({
            tokenId: r.user.uid,
            userEmail: newUser.email,
            userName: newUser.firstName + newUser.lastName,
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
