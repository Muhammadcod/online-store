import { applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { getFirestore } from 'redux-firestore'
import { getFirebase } from 'react-redux-firebase'
import logger from './logger'

export default compose(
  applyMiddleware(
    thunk.withExtraArgument({ getFirebase, getFirestore }),
    logger,
  ),
)
