import {format} from 'date-fns';
import { Link } from 'react-router-dom';

export const Post = ({_id, title, summary, content, cover, createdAt, author}) => {
  return (
    <div className="post">
        <div>
          <Link to={`/post/${_id}`}>
          <img src={'https://mern-blog-agam.onrender.com/'+cover} alt='pic'></img>
          </Link>
        </div>
        <div className="texts">
          <Link to={`/post/${_id}`}>
            <h2>{title}</h2>
          </Link>
          <p className="info">
            <p className="author">{author.username}</p>
            <time>{format(new Date(createdAt), 'd MMM, yyyy HH:mm')}</time>
          </p>
          <p className="summary">{summary}</p>
        </div>
      </div>
  )
}
