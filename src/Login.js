import React from 'react'
import './Login.css'
import logo from './spotify_logo.svg'
function Login() {
    return (
        <div>
            <img src={logo} alt='logo' />
            <button>LOGIN WITH SPOTIFY</button>
        </div>
    )
}
export default Login

