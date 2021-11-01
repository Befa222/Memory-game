import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Login() {
  function virtualKeyboardTrue() {
    let viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute("content", viewport.content + ", height=" + window.innerHeight)
}

  function virtualKeyboardFalse() {
let viewport = document.querySelector("meta[name=viewport]");
   viewport.setAttribute('content', viewport.content = "width=device-width, initial-scale=1, user-scalable=0" )
}
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
    <div className='form-container'>
        <h1>{error}</h1>
          <form className='form' onSubmit={handleSubmit} >
            <input onFocus={virtualKeyboardTrue} className='email' type="email" ref={emailRef} required placeholder='Your email' />
            <input onFocus={virtualKeyboardTrue} className='password' type="password" ref={passwordRef} required placeholder='Your password' />
            <input onFocus={virtualKeyboardTrue} className="submit-button" type="submit" disabled={loading} value="Log in" />
          </form>
        <div onFocus={virtualKeyboardFalse}>
          <Link to="/Forgot-password">Forgot Password?</Link>
        </div>
        <div onFocus={virtualKeyboardFalse}>
          Need an account? <Link to="/Sign-up">Sign Up</Link>
        </div>
        <div onFocus={virtualKeyboardFalse}>
         <Link to="/Leaderboard">LEADERBOARD</Link>
        </div>
        </div>
    </>
  )
}