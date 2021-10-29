import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/Game")
    } catch {
      setError("Failed to log in")
    }

    //setLoading(false)
  }

  return (
    <>
        <h1>{error}</h1>
     <form onSubmit={handleSubmit}>
            
                <input className='contact-email' type="email" ref={emailRef} required placeholder='Your email' />
             
                <input className='password' type="password" ref={passwordRef} required placeholder='Your password' />
                
                <input className="send-button" type="submit" disabled={loading} value="Log in" />
            </form>
      <div>
            <Link to="/Forgot-password">Forgot Password?</Link>
          </div>
      <div>
        Need an account? <Link to="/">Sign Up</Link>
      </div>
    </>
  )
}