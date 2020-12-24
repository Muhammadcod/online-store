import { applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { getFirebase } from 'react-redux-firebase'
import logger from './logger'
import firebase from '../../config/fbConfig'
export default compose(
  applyMiddleware(
    thunk.withExtraArgument({ getFirebase, getFirestore }),
    logger,
  ),
  reduxFirestore(firebase),
)
