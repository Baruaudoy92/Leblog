import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./user.css";
import axios from 'axios';

function User() {
    const [user, setUser] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3000')
        .then(result => setUser(result.data))
        .catch(err => console.log(err))
         
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/deleteUser/'+id)
        .then(res => {console.log(res)
        window.location.reload()})
        .catch(errr => console.log(errr))
    }

  return (
    <>
    <div className='register'>
        <div className='registerTitle'>
            <Link to="/register" className='add'>Add +</Link>
            <table className='table'>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                    user.map((user) => {
                    return  <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>
                            <Link to={`/updateuser/${user._id}`} className='registerButton'>Update</Link>
                            <button className='registerButton'
                            onClick={(e) => handleDelete(user._id)}>Delete</button>
                            </td>
                            </tr>
                    })
                   }
                </tbody>
            </table>
        </div>
    </div>
    </>
  )
}

export default User;