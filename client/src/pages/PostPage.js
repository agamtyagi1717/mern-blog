import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { UserContext } from '../UserContext';

const PostPage = () => {
  const [postInfo, setPostInfo] = useState(null);
  const {userInfo} = useContext(UserContext);

  const {id} = useParams();
  useEffect(()=>{
    fetch(`https://mern-blog-agam.onrender.com/post/${id}`).then(response => {
        response.json().then(postInfo => {
            setPostInfo(postInfo);
        })
    })
  },[id]);

  if(!postInfo) return '';

  return (
    <div className='post-page'>
        <h1>{postInfo.title}</h1>

        <div className="texts">
            <time>{format(new Date(postInfo.createdAt), 'd MMM, yyyy HH:mm')}</time>
            <p className="author">by @{postInfo.author.username}</p>
        </div>      

        {userInfo.id === postInfo.author._id && (
            <div className='edit-row'>
                <Link className='edit-btn' to={`/edit/${id}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                    Edit this post
                </Link>
            </div>
        )}          
        {userInfo.id !== postInfo.author._id && (
            <div className='edit-row'>
                Only <span className='author'>{postInfo.author.username}</span> has the privilege to make edits to this blog.
            </div>
        )}          
        
        <div className='image'>
            <img src={'https://mern-blog-agam.onrender.com/'+postInfo.cover} alt='pic'></img>
        </div>
        <div dangerouslySetInnerHTML={{__html: postInfo.content}}/>
    </div>
  )
}

export default PostPage;