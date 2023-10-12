import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

function Update() {
  const {id} = useParams()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  useEffect(()=> {
    axios.get('http://localhost:3000/getUser/'+id)
    .then(result =>{console.log(result)
      setName(result.data.name)
      setEmail(result.data.email)
      setPassword(result.data.password)
    })
    .catch(err => console.log(err))    
}, [])

const Update = (e) => {
  e.preventDefault();
  axios.put("http://localhost:3000/update/"+id, {name, email, password})
  .then(result => {
  console.log(result)
  })
  .catch(err => console.log(err)) 
}


  return (
         <div className="register">
          <span className="registerTitle">UPDATE USER</span>
          <form onSubmit={Update} className="registerForm">
              <label>Username</label>
              <input type="text" className="registerInput" placeholder="Enter your username..."
              value={name} onChange={(e) => setName(e.target.value)}/>
              <label>Email</label>
              <input type="text" className="registerInput" placeholder="Enter your email..."
               value={email} onChange={(e) => setEmail(e.target.value)}/>
              <label>Password</label>
              <input type="current-password" className="registerInput" placeholder="Enter your password..."  value={password} onChange={(e) => setPassword(e.target.value)}/>
              <button className="registerButton">Update</button>
          </form>
      </div>
  )
}

export default Update;