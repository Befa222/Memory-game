import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Login() {

    const emailRef = useRef()

    const passwordRef = useRef()

    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/Game')
        } catch{
            setError('failed to log in')
        }

        setLoading(false)
    }

    return (
        <div>
            <h2>{error}</h2>

            <form onSubmit={handleSubmit}>
               
                <input className='user-email' type="email" ref={emailRef} required placeholder='Your email' />

                <input className='user-password' type='password' ref={passwordRef} required placeholder='Password' />

                <input className="create-profile" type="submit" disabled={loading} value="Log in" />
            </form>
            <h2>Need an account?<Link to='/'>Sign up</Link></h2>
            <Link to='/Forgot-password'>Forgot your password?</Link>
        </div>
    )
}
