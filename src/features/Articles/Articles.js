import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { AnimatedList } from 'react-animated-list';
import {
  selectIsLoadingData,
  selectArticlesData

} from './ArticleSlice';
import  Post  from '../../components/Post';
import { loadArticleData } from './ArticleSlice';
import ArticleLoading from './ArticleLoading';
export default function Articles() {

    const dispatch = useDispatch();
    const articleData = useSelector(selectArticlesData);
    const isLoadingData = useSelector(selectIsLoadingData);
    console.log(articleData);
    useEffect(() => {
      dispatch(loadArticleData('/r/pics/'));
    }, [dispatch]);
  
    if (isLoadingData) {
      return (
        <AnimatedList animation="zoom">
          {Array(5).fill(<ArticleLoading />)}
        </AnimatedList>
      );
    }
    if(!articleData){
      return <p>Sorry, no posts found.Click on Home to get back </p>
    }
    return (
      <>
    
          {articleData.posts.map((post,index) => (
         
            <Post key={post.id} post={post} />
        
        ))}
        
      </>
    );
  }

