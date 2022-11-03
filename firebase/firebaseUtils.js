import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

export const submitLocations = async (locations, uid) => {
  const config = {
    apiKey: 'AIzaSyDED_QXGZ_OsLc9nxUzjvAZlmtESpHurUw',
    authDomain: 'ibgooo-97a4e.firebaseapp.com',
    projectId: 'ibgooo-97a4e',
    storageBucket: 'ibgooo-97a4e.appspot.com',
    messagingSenderId: '212572346416',
    appId: '1:212572346416:web:1f17e8564b40c9fd3eb5f5',
    measurementId: 'G-9RLT73FS76'
  }

  firebase.initializeApp(config)

  const firestore = firebase.firestore()
  const userRef = firestore.doc(`users/${uid}`)

  try {
    await userRef.set({
      locations
    })
  } catch
  (error) {
    console.log(error)
  }

  return userRef
}

export default firebase
