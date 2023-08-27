import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function register(e){
    e.preventDefault();

    const response = await fetch('http://localhost:4000/register', {
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: {'Content-Type': 'application/json'},
    });

    // console.log(response);

    if(response.status === 200){
      toast.success('Registration successful!', {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }else{
      toast.warn('Username taken', {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    
  }
    
  return (
    <form className='register' onSubmit={register}>
        <h1>Register</h1>
        <input type='text'
               placeholder='Username'
               value={username}
               onChange={e=>setUsername(e.target.value)}
        />
        <input type='password' 
               placeholder='Password'
               value={password}
               onChange={e=>setPassword(e.target.value)}
        />
        <button>Register</button>
        <ToastContainer
          className='toast'
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
    </form>
  )
}

export default RegisterPage