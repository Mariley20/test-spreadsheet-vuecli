import firebase from 'firebase/app'

// const settings = { timestampsInSnapshots: true }
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAlro3RJLyJ_xIFLqYpDSYfZWpYtLCYniA',
  authDomain: 'reydelsur-c2a0a.firebaseapp.com',
  databaseURL: 'https://reydelsur-c2a0a.firebaseio.com',
  projectId: 'reydelsur-c2a0a',
  storageBucket: 'reydelsur-c2a0a.appspot.com',
  messagingSenderId: '106583468758',
  appId: '1:106583468758:web:52a0437b3372f46ff8f777'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// firebase.firestore().settings(settings)

export default firebase
