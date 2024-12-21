import React, { useState } from 'react'
import axios from'axios'
import './App.css'
const App = () => {
const [username,setUsername]=useState("");
const[profileInfo,setProfileInfo]=useState("");
const[selectedNav,setSelectedNav]=useState(1);



const getInformation=async()=>
{
   const {data}=await axios.get(`https://api.github.com/users/${username}`)
   console.log(data);
   setProfileInfo(data);
}

  return (
    <>
    <div className='app'>
      <h1>Github User Information</h1><br/>
      <input type='text' placeholder='Enter your profile name:' value={username} onChange={(e)=>setUsername(e.target.value)}/>
      <button onClick={getInformation}>Search</button>
      </div>
      <br/>
      <br/>
      <nav>
        <ul>
          <li className={selectedNav ===1 ? 'navActive' : undefined} onClick={()=>setSelectedNav(1)}>login</li>
          <li className={selectedNav ===2 ? 'navActive' : undefined} onClick={()=>setSelectedNav(2)}>location</li>
          <li className={selectedNav ===3 ? 'navActive' : undefined} onClick={()=>setSelectedNav(3)}>company</li>
          <li className={selectedNav ===4 ? 'navActive' : undefined} onClick={()=>setSelectedNav(4)}>id</li>
          <li className={selectedNav ===5 ? 'navActive' : undefined} onClick={()=>setSelectedNav(5)}>public_repos</li>

        </ul>
      </nav>
      {/* answer print */ }
      <div className='app-container'>
        {selectedNav ===1 ? profileInfo!==""?
        <div>
          <h3>{profileInfo.login}</h3>
        </div> : 
        <h1> No data found</h1> :null }
         {selectedNav ===2 ? profileInfo!==""?
        <div>
          <h3>{profileInfo.location}</h3>
        </div> : 
        <h1> No data found</h1> :null }

        {selectedNav ===3 ? profileInfo!==""?
        <div>
          <h3>{profileInfo.company}</h3>
        </div> : 
        <h1> No data found</h1> :null }
        
        {selectedNav ===4 ? profileInfo!==""?
        <div>
          <h3>{profileInfo.id}</h3>
        </div> : 
        <h1> No data found</h1> :null }
 
        {selectedNav ===5 ? profileInfo!==""?
        <div>
          <h3>{profileInfo.public_repos}</h3>
        </div> : 
        <h1> No data found</h1> :null }

        
      </div>
    </>
  )
}
