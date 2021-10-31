import React, { useState, useEffect } from 'react'
import { ref, child, get } from '@firebase/database';
import { database } from '../firebase';
import { Link } from 'react-router-dom';

export default function Leaderboard() {

    const [allTimes, setAllTimes] = useState([])

    useEffect(() => {
        function printTimes() {
            const allT = []
            const dbRef = ref(database);
            get(child(dbRef, 'users/')).then((snapshot) => {
                if (snapshot.exists()) {
                    snapshot.forEach(e => {
                        const data = (e.val())
                        console.log(data)
                        const times = data['bestTime']
                        console.log(times)
                        allT.push(times)
                        console.log(allT)
                        allT.sort((a, b) => a.time - b.time)
                        const showall = [...allTimes, ...allT];
                        setAllTimes(showall)
                    })

                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });
        }
        printTimes()

    }, [])

    return (
        <div>

            <h1>LEADERBOARD</h1>
            {allTimes &&
                allTimes.map((e, index) =>
                    <ul key={index}>
                        <li>{e.email}: {e.time}s</li>
                    </ul>
                )
            }
            <Link to='/'>Log in</Link>
        </div>
    )
}
