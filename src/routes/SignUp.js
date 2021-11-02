import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Signup() {

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
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/Game")
    } catch {
      setError("Failed to create an account")
    }

    //setLoading(false)
  }

  return (
    <>
    <div className='form-container'>
      <h1>{error}</h1>
        <form className='form' onSubmit={handleSubmit} >
                <input onChange={virtualKeyboardTrue}  className='email' type="email" ref={emailRef}  required placeholder='Your email' />
                <input onChange={virtualKeyboardTrue}  className='password' type="password" ref={passwordRef}  required placeholder='Your password' />
                <input onChange={virtualKeyboardTrue}  className='password' type="password" ref={passwordConfirmRef} required placeholder='Your password' />
                <input onChange={virtualKeyboardTrue}  className="submit-button" type="submit" disabled={loading} value="Sign In" />
        </form>
      <div onFocus={virtualKeyboardFalse}>
        Already have an account? <Link to="/">Log In</Link>
      </div>
    </div>
    </>
  )
}