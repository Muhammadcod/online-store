import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'
import './index.css'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import { createStore } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'
import firebase from './config/fbConfig'
import App from './containers/App'
import reducer from './store/reducers'
import middleware from './store/middleware'

const store = createStore(reducer, middleware)
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  attachAuthIsReady: true,
}
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router>
          <App />
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
