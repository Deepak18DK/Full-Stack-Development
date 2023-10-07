import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import validator from 'validator'
import axios from 'axios';
import videoFile from '../images/furnwebvideo.mp4';
import picture from '../images/furnweb.png';

function Signup() {
  const nav=useNavigate();
  const[name,setname]=useState('');
  
  const[email,setemail]=useState('');
  const[username,setUsername]=useState('');
  const[password,setpassword]=useState('');
  const[conpassword,setconpassword]=useState('');
  const senddb=(e)=>{
    e.preventDefault()
    const details={email,name,password,username}
    if(email.length==0||password.length==0||name.length==0||username.length==0){
      alert("Enter All fields")
    }
    else if (!validator.isEmail(email)) {
      alert('Enter Valid Email!')
    } 
    else if(password!=conpassword){
      alert("Password And Confirm Password Must be same!")
    }
    else{
    
    axios.post(`http://localhost:8080/signup/post`, (details)).then(res => console.log(res));
    nav("/home")
  }
}
  return (
    <div id="body">
      
      <div className="background-video">
      <video autoPlay muted loop>
        <source src={videoFile} type="video/mp4" />
       
      </video>
      <div className="content">
        {

        }
      <div className='furnweb'>
      <img src={picture} alt="Image Description"  style={{ width: '185px', height: '155px' }} />
    </div>
    <div className='signup-form1'>
  <div className='container'>
    <div className='header'>
      <h1>Create an Account</h1>
      <p><b>Get started for free!</b></p>
    </div>
    <form>
      <div className="input">
        <i className="fa-solid fa-user"></i>
        <input type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder="Name" />
      </div>
      <div className="input">
        <i className="fa-solid fa-user"></i>
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Username" />
      </div>
      <div className="input">
        <i className="fa-solid fa-envelope"></i>
        <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Email" />
      </div>
     
      <div className="input">
        <i className="fa-solid fa-lock"></i>
        <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="Password" />
      </div>
      <div className="input">
        <i className="fa-solid fa-lock"></i>
        <input type="password"  onChange={(e)=>setconpassword(e.target.value)} placeholder="Confirm Password" />
      </div>
     <input className="signup-btn" onClick={senddb} type="submit" value="SIGN UP" /> 
    </form>
    <Link to="/">  <p className='word'><b>Already have an account? Sign in</b></p></Link>
  </div>
</div>
</div>
</div>
</div>

  )
}

export default Signup;