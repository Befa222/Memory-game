import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'

const app = initializeApp({
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID
    apiKey: "AIzaSyClYR61pWZ4vyP4dRB16MXv5n55BxEC1Gw",
    authDomain: "memory-game-7f6eb.firebaseapp.com",
    projectId: "memory-game-7f6eb",
    storageBucket: "memory-game-7f6eb.appspot.com",
    messagingSenderId: "747326177648",
    appId: "1:747326177648:web:aea5b7e0151d2287550fb5"
})

export const auth = getAuth()
export const storage = getStorage(app)
export default app
