
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function ForgotPassword() {

    // function virtualKeyboardTrue() {
    //     let viewport = document.querySelector("meta[name=viewport]");
    //     viewport.setAttribute("content", viewport.content + ", height=" + window.innerHeight)
    // }
    
    //   function virtualKeyboardFalse() {
    // let viewport = document.querySelector("meta[name=viewport]");
    //    viewport.setAttribute('content', viewport.content = "width=device-width, initial-scale=1, user-scalable=0" )
    // }

    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')


    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your email for instructions')
        } catch {
            setError('failed to reset password')
        }

        //setLoading(false)
    }

    return (
        <>
            <div className='form-container'>
                <h2>{error}</h2>
                <h2>{message}</h2>
                <form className='form' onSubmit={handleSubmit}>
                    <input className='email' type="email" ref={emailRef} required placeholder='Your email' />
                    <input className="submit-button" type="submit" disabled={loading} value="Reset password" />
                </form>
                    <Link to='/'>Log in</Link>
            </div>
        </>
    )
}
