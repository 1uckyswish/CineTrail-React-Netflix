import React from 'react'
import "./SignUp.css"

function SignUp() {
  return (
    <div className='signup-container'>
        <form className='signup-form'>
            <div className="title-container">
                <h1>Sign Up</h1>
                <p>Please fill in your information to create an account.</p>
            </div>
            <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Enter Email' name='email' required/>
            </div>
            <div className="input-wrapper">
                <label htmlFor="pwd">Password</label>
                <input type="password" placeholder='Enter Password' name='pwd' required />
            </div>
            <div className="input-wrapper">
                <label htmlFor="username"></label>
                <input type="text" placeholder='Enter Username' name='username' required/>
            </div>
            <div className="button-container">
                <button type='reset' className='cancelbtn'>Cancel</button>
                <button type='submit' className='signupbtn'>Sign Up</button>
            </div>
        </form>
    </div>
  )
}

export default SignUp