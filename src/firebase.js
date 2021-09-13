import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"

const app = firebase.initializeApp({
  // apiKey: process.env.GATSBY_FIREBASE_API_KEY,
  // authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
  // databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
  // projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.GATSBY_FIREBASE_APP_ID
    apiKey: "AIzaSyChUj1-Ugzr7PEFt4zcqqNFg-CDqiVCyLc",
  authDomain: "garden-auth-development.firebaseapp.com",
  projectId: "garden-auth-development",
  storageBucket: "garden-auth-development.appspot.com",
  messagingSenderId: "778015347435",
  appId: "1:778015347435:web:ca52a3a8384805ab4ca4ae"

})

export const auth = app.auth()
export const db = app.database()
export default app
