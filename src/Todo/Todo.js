
import { signOut } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import MainSection from './MainSection';

import SideNav from './SideNav';

function App(props) {
  const [active,setActive] = useState("INBOX")
  const navigate = useNavigate()
  const handleSignout=()=>{
    signOut(auth).then(()=>{
      navigate("/")
    })
  }
  return (
    <div id='main'>
      {props.name ? (
        <div>
          <header>
            <h1 className='inboxheading'>Welcome {props.name}</h1>
        <div className="row">
          <div className="col-md-2">
            <SideNav change={setActive}/>
          </div>
          <div className="col-md-10">
            <MainSection active={active}/>
          </div>
        </div>
      </header>
      <button className='signoutbtn' onClick={handleSignout}>Signout</button>
        </div>
      ):"Login Again"}
      
    </div>
  );
}

export default App;
