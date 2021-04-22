import {React,useState} from 'react';
import { useDispatch } from 'react-redux';
import Comment from './Comment';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import {
  TiArrowUpOutline,
  TiArrowDownOutline,
  
} from 'react-icons/ti';
import { FcComments } from "react-icons/fc";
export default function Post({post}) {
  const dispatch = useDispatch();
  const [replies, setReplies] = useState([]);
  const handleClick = () => {

    getComments();
 
 
 }
  const getComments = async () => {
    const response = await fetch(`https://www.reddit.com${post.permalink}.json`);
    const data = await response.json();
    // debugger;
    setReplies(data[1].data.children.map(({data})  => data));
    // setPosts(data.data.children.map(post => post.data));
   

};
  return (
    <>
      <Card style={{width:'50rem'}}>
        <Card.Img variant="top" alt='' width={100}   className="align-self-center mr-3" src={post.url}  />
        <div className="post-votes-container">
        <button
          type="button"
          className="icon-action-button up-vote"
          aria-label="Up vote"
        >
          <TiArrowUpOutline className="icon-action" />
        </button>
      {post.ups}
        <button
          type="button"
          className="icon-action-button down-vote"
          aria-label="Down vote"
        >
          <TiArrowDownOutline className="icon-action" />
        </button>
      </div>
        <div className="card-body">
        <h5 className='mt-0'>{post.title}</h5>
         <button type="button" className="btn btn-info" onClick={handleClick} >  {post.num_comments} comments<FcComments /></button>
        <Link key={post.id} to={`/post/${post.id}`}>
            <p>Show More</p>
          </Link>
        <div className='replies'>
      {replies.map(reply => (
        <Comment
          coms={reply.body}
          key={reply.id}
          userName={reply.author}
        />
     ))} 

      </div></div>
      </Card>
      </>
     );
}
