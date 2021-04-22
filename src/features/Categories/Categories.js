import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {
  selectIsLoadingData,
  selectCategoriesData

} from './CategorySlice';
import { loadCategoriesData } from './CategorySlice';
import { loadArticleData } from '../Articles/ArticleSlice';
export default function Categories() {

    const dispatch = useDispatch();
    const categoriesData = useSelector(selectCategoriesData);
    const isLoadingData = useSelector(selectIsLoadingData);
    console.log(categoriesData);
    useEffect(() => {
      dispatch(loadCategoriesData());
    }, [dispatch]);
  
    if (isLoadingData || !categoriesData) {
     return null;
      // return <div>loading state</div>;
    }
  
    return (
      <>
        
          
          {categoriesData.map((category) => (
                 <a className="nav-link" href='#' onClick={(e) => dispatch(loadArticleData(category.url))}>{category.title}</a> 
          ))}
       
        
      </>
    );
  }

