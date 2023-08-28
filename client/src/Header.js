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
  }, [setUserInfo]);

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
                  <span>Hello, {username}!</span>
                  <Link to="create">Create new post</Link>
                  <a href='' onClick={logout}>Logout</a>
                </>
              )}

              {!username && (
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
                </>
              )}
            </nav>
        </div>
      </header>
  )
}
