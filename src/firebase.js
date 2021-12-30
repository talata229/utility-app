 import firebase from 'firebase/compat/app';

 import 'firebase/compat/auth';

// const firebaseConfig = {
//   apiKey: 'AIzaSyDNPtj0FB3PkV8ZCVZr8aVFupPhV8T3WDA',
//   authDomain: 'clone-app-737eb.firebaseapp.com',
//   projectId: 'clone-app-737eb',
//   storageBucket: 'clone-app-737eb.appspot.com',
//   messagingSenderId: '1062530964298',
//   appId: '1:1062530964298:web:3a1410233cd81a8ddcbfb3',
// };

const firebaseConfig = {
    apiKey: "AIzaSyCljN85u2gYM3tgjdWfkzEmdGmoy8Q3-Kw",
    authDomain: "utility-app-bdbb8.firebaseapp.com",
    projectId: "utility-app-bdbb8",
    storageBucket: "utility-app-bdbb8.appspot.com",
    messagingSenderId: "768478357219",
    appId: "1:768478357219:web:609f3211d4ca19a8d487d6",
    measurementId: "G-GCHE470XV5"
  };


firebase.initializeApp(firebaseConfig);

export default firebase.auth();