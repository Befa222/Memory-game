import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import {getDatabase} from 'firebase/database'



const app = {

    apiKey: "AIzaSyClYR61pWZ4vyP4dRB16MXv5n55BxEC1Gw",
    authDomain: "memory-game-7f6eb.firebaseapp.com",
    databaseURL: "https://memory-game-7f6eb-default-rtdb.firebaseio.com",
    projectId: "memory-game-7f6eb",
    storageBucket: "memory-game-7f6eb.appspot.com",
    messagingSenderId: "747326177648",
    appId: "1:747326177648:web:aea5b7e0151d2287550fb5"
}
const config = initializeApp(app)
export const auth = getAuth(config)
export const database = getDatabase(config)
export default app
