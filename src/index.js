import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'
import './index.css'
import { Provider } from 'react-redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import { createStore } from 'redux'
import firebase from './config/fbConfig'
import App from './components/App'
import reducer from './store/reducers'
import middleware from './store/middleware'

const store = createStore(reducer, middleware)
const rrfConfig = { userProfile: 'users' }
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
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
