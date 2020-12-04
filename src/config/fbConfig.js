import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBVB2KmscgdBjEFRlICJR9hxpjeNuaBrHs',
  authDomain: 'fab-world.firebaseapp.com',
  projectId: 'fab-world',
  storageBucket: 'fab-world.appspot.com',
  messagingSenderId: '249522005099',
  appId: '1:249522005099:web:ffd7483975b46e72f37d2e',
  measurementId: 'G-ZT9WSRCWWD',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()
// firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase
