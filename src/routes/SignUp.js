import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function SignUp() {

    const emailRef = useRef()
    
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push('/Game')
        } catch {
            setError('failed to create account')
        }

        setLoading(false)
    }

    return (
        <div>
            <h2>{error}</h2>

            <form onSubmit={handleSubmit}>
                {/* <input className='user-name' type="text" ref={nameRef} required placeholder='Your Name' /> */}

                <input className='user-email' type="email" ref={emailRef} required placeholder='Your email' />

                <input className='user-password' type='password' ref={passwordRef} required placeholder='Password' />

                <input className='password-confirmation' type='password' ref={passwordConfirmRef} required placeholder='confirm password' />

                <input className="create-profile" type="submit" disabled={loading} value="Create profile" />
            </form>
            <h2>Already have an account?<Link to='/LogIn'>LogIn</Link></h2>
        </div>
    )
}
