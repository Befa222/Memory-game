import { useState, useRef } from "react"
import React from 'react'

export default function Stopwatch() {

    const [timer, setTimer] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const countRef = useRef(null)

   const handleStart = () => {
        setIsActive(true)
        countRef.current = setInterval(() => {
          setTimer((timer) => timer + 1)
        }, 1000)
      }

   const handleReset = () => {
        clearInterval(countRef.current)
        setIsActive(false)
        setTimer(0)
      }

      const formatTime = () => {
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const minutes = `${Math.floor(timer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)
    
        return `${getHours} : ${getMinutes} : ${getSeconds}`
      }

    return (
        <div>
            <p>{formatTime()}</p>
        </div>
    )
}
