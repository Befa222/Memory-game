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
                        const times = data['bestTime']
                        allT.push(times)
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
        return printTimes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <h1 className='leaderboard'>LEADERBOARD</h1>
            <div className='leaderboard-container' >
                <ol>
                    {allTimes &&
                        allTimes.sort((a, b) => a.time - b.time).map((e, index) =>
                            <li key={index}>{e.email}: {e.time}s</li>
                        )
                    }
                </ol>
            </div>
            <div className='login-container'>
                <Link to='/'>Log in</Link>
            </div>

        </>
    )
}
