// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
// import { getDatabase, ref, set } from "firebase/database";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: 'AIzaSyDED_QXGZ_OsLc9nxUzjvAZlmtESpHurUw',
//   authDomain: 'ibgooo-97a4e.firebaseapp.com',
//   projectId: 'ibgooo-97a4e',
//   storageBucket: 'ibgooo-97a4e.appspot.com',
//   messagingSenderId: '212572346416',
//   appId: '1:212572346416:web:1f17e8564b40c9fd3eb5f5',
//   measurementId: 'G-9RLT73FS76'
// }

// // Initialize Firebase
// const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)

// export co writeUserData(userId, name, email, imageUrl) {
//     const db = getDatabase();
//     set(ref(db, 'users/' + userId), {
//       username: name,
//       email: email,
//       profile_picture : imageUrl
//     });
//   }
