// import * as firebase from 'firebase/app';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// const app =  firebase.initializeApp( {
//     apiKey: "AIzaSyA9SgURjhRSKK-u6uLi8bAHZcNKyKh9Fyo",
//     authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//     databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID
// });
// export default app;
const config = {
    apiKey: "AIzaSyA9SgURjhRSKK-u6uLi8bAHZcNKyKh9Fyo",
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

firebase.initializeApp(config);

export default firebase
