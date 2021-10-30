import React, {useState} from 'react'
import { ref, child, get } from '@firebase/database';
import { database } from '../firebase';
import { getAuth } from '@firebase/auth';


export default function Leaderboard() {

    const [allTimes, setAllTimes] = useState()

    const dbRef = ref(database);
    get(child(dbRef, 'users/')).then((snapshot) => {
        if (snapshot.exists()) {
            const data = (snapshot.val());
           console.log(data)
         
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });


    return (
        <div>
            <h1>LEADERBOARD</h1>
         
            
        </div>
    )
}
