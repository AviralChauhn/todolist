
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { auth } from './firebase';
import Todo from "./Todo/Todo"
import bgImage from './video/Digital_Grapes.mp4'

function App() {
  const [username,setUserName] = useState("")
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setUserName(user.email.substr(0,user.email.indexOf("@")))
      }
      else {
        setUserName("")
      }
    })
  },[])
  
  return (
    
    <div>
      <video autoPlay muted loop>
        <source src={bgImage} type="video/mp4"/>
      </video>
      <BrowserRouter>
        <Routes>
          <Route path="/todo" element={<Todo name={username}/>}/>
          <Route path='/login' element = {<Login/>}/>
          <Route path='/signup' element = {<Signup/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;