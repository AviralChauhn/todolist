import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1 className='headinghome'>Welcome To ToDoList</h1>
    <div className='loginpage'>
      <Link to='/login'>Login</Link>
      <br /><br />
      <Link to='/Signup'>Signup</Link>

    </div>
    </div>
  )
}
