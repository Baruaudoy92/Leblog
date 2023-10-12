import React, { useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/register", {name, email, password})
        .then(result => {
            console.log(result)
        })
        .catch(err => console.log(err)) 
    }
    return (
      <div className="register">
          <span className="registerTitle">Register</span>
          <form className="registerForm" onSubmit={Submit}>
              <label>Username</label>
              <input type="text" className="registerInput" placeholder="Enter your username..." onChange={(e) => setName(e.target.value)}/>
              <label>Email</label>
              <input type="text" className="registerInput" placeholder="Enter your email..." onChange={(e) => setEmail(e.target.value)}/>
              <label>Password</label>
              <input type="current-password" className="registerInput" placeholder="Enter your password..." onChange={(e) => setPassword(e.target.value)}/>
              <button className="registerButton">Register</button>
          </form>
          <button className="registerLoginButton">
          <Link className="link" to="/login">SE CONNECTER</Link>
          </button>
          <a href="/user">Retour</a>
      </div>
    )
  }
 
