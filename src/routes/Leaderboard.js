import React from 'react'
import { ref, child, get } from '@firebase/database';
import { database } from '../firebase';
import { Link } from 'react-router-dom';



export default function Leaderboard() {

    //const [allTimes, setAllTimes] = useState()


    const data = []
    const dbRef = ref(database);
    get(child(dbRef, '/users')).then((snapshot) => {
        if (snapshot.exists()) {
            data.push(snapshot.val());
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
         <button>test</button>
            <Link to='/'>Log in</Link>
        </div>
    )
}
