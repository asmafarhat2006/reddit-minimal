import {React,useState,useEffect} from 'react';
import { AnimatedList } from 'react-animated-list';
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { FcComments } from "react-icons/fc";
import {
    TiArrowUpOutline,
    TiArrowDownOutline,
    
  } from 'react-icons/ti';
  import ArticleLoading from '../features/Articles/ArticleLoading';
export default function PostDetail() {
  const [post, setPost] = useState([]);
  let { postId } = useParams();
  let isLoading =  true;

    
  useEffect(() => {
    getPostDetail();

    if(isLoading){
        return (
            <AnimatedList animation="zoom">
              {Array(1).fill(<ArticleLoading />)}
            </AnimatedList>
          );
    
    }
    // setPosts(data.data.children.map(post => post.data));
    console.log(post);
   
  }, []);
  const getPostDetail = async () => {
    const response = await fetch(`https://www.reddit.com/${postId}.json`);
    const data = await response.json();
    // debugger;
    console.log(data);
  
    setPost(data[0].data.children.map(({data})  => data));
    // debugger;
   console.log(post);
};
  return (
    <>
     
      {post.map(item => {
          isLoading = false;
        return <Card style={{width:'50rem'}}>
                <Card.Img variant="top" alt='' width={100}   className="align-self-center mr-3" src={item.url}  />
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
                    <h5 className='mt-0'>{item.title}</h5>
                    <p><FcComments />Total comments :  {item.num_comments} </p>
                </div>
                </Card>
       

      })}
    

      </>
     );
}
