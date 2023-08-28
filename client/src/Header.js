import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './UserContext';

export const Header = () => {
  const {setUserInfo, userInfo} = useContext(UserContext);
  useEffect(()=>{
    fetch('https://mern-blog-agam.onrender.com/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo=>{
        setUserInfo(userInfo);
      })
    });
  }, []);

  function logout(){
    fetch('https://mern-blog-agam.onrender.com/logout', {
      credentials: 'include',
      method: 'POST',
    });

    setUserInfo(null);
  }

  const username = userInfo?.username;


  return (
    <header>
        <div className='header'>
            <a href="/" className="logo">PerceptivePages</a>

            <nav>
              {username && (
                <>
                  <span className='greetings'>Hello, {username}!</span>
                  <Link className='navlinks' to="create">Create new post</Link>
                  <a className='navlinks' href='' onClick={logout}>Logout</a>
                </>
              )}

              {!username && (
                <>
                  <Link className='navlinks' to="/login">Login</Link>
                  <Link className='navlinks' to="/register">Register</Link>
                </>
              )}
            </nav>
        </div>
      </header>
  )
}
