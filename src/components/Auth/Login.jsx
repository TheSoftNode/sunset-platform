import React from 'react'
import { useState } from 'react'

const Login = () => {
  const[isLoginForm,setIsLoginForm] = useState(true)

  const toggleLoginForm=()=>{
    setIsLoginForm(!isLoginForm);
  }
  return (
    <div className='mt-28'>
       
      <form className='bg-cyan-50 shadow-xl my-3 mx-auto w-4/12  p-10 rounded-lg bg-opacity-50 '>
        <h1 className='font-bold  text-xl py-4 text-center'>{isLoginForm? "Welcome to SusNet,A Sustainable AI-Enabled Energy Management Network."
        : "Register Your SusNet Hardware"}</h1>
       
        
        
        {!isLoginForm && (
          
        <input type="text" placeholder='Enter your Name' 
        className='p-3 my-1 w-full shadow-lg border-b-2 bg-gray-100 rounded-md'/>)}

        
      
        <input type="text"placeholder='Email Address' 
        className='p-3 my-1 w-full shadow-lg bg-gray-100 rounded-md'/>

        
        <input type="password"placeholder='Password' 
        className='p-3 my-1 w-full bg-gray-100 rounded-md shadow-lg'/>
        <button className='p-3 my-6 bg-green-400 w-1/2 ml-24 font-bold hover:bg-orange-500  shadow-2xl rounded-lg'>
          {isLoginForm ?"Sign In":"Sign Up"}</button>
          <p className=' text-center cursor-pointer' onClick={toggleLoginForm}>
            {isLoginForm ?"Not registered yet? Click here to Register": "Already registered? Sign in Now"}</p>
      </form>
      
    </div>
  )
}

export default Login