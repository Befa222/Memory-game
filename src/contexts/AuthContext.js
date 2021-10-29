import React, {useContext, useState, useEffect} from 'react'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged } from '@firebase/auth'
import {ref, set} from "firebase/database";
import {database} from '../firebase'


const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}


export function AuthPovider({children}) {

    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    const [error, setError] = useState('')

    const [bestTime, setBestTime] = useState()

    


    function signup(email, password) {
        
    return createUserWithEmailAndPassword(auth, email, password)
        }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout(){
        return auth.signOut()
    }

    function resetPassword(email) {
        return sendPasswordResetEmail(auth, email)
    }

    
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setLoading(false)
        setCurrentUser(user)
        console.log(currentUser)
        })
         unsubscribe()
    }, [])
    
    const writeUserData =()=> {
        const db = database;
        set(ref(db, 'users/' + currentUser.uid), {
         email : currentUser.email,
        });
        set(ref(db, 'users/' + currentUser.uid + '/bestTime'), {
           time: 0
         })
      }



    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        bestTime,
        setBestTime,
        
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
