import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';

const LoginPage = () => {
    const[username,setUsername] = useState('');
    const[password,setPassword] = useState('');
    const[error,setError] = useState('')
    const navigate = useNavigate();


  const handleLogin = async()=>{
    try{
       const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({username,password})
       });
    
      if(response.ok){
        const data = await response.json();
        localStorage.setItem('user',JSON.stringify(data));
        navigate('/profile');
      }else{
        setError('Login Failed')
      }
    }catch(error){
        setError('An Error occured');
    }
  }


  return (
    <div>
      <h1>Sign in to your sccount</h1>
      <input 
      type='text'
      value={username}
      placeholder='your email'
      onChange={(e)=>setUsername(e.target.value)}
      
      />
     <input 
       type='password'
       value={password}
       placeholder='your password'
       onChange={(e)=>setPassword(e.target.value)}
     />
     <button onClick={handleLogin}>Continue</button>
     {error && <p>{error}</p>}
    </div>
  )
}

export default LoginPage
