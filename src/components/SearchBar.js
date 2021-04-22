import React, { useState } from "react";
import { useSelector,useDispatch } from 'react-redux';
import { loadArticleDataBySearchTerm } from '../features/Articles/ArticleSlice';
export default function SearchBar() {
    const [searchterm, setSearchTerm] = useState("");
   
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(searchterm);
      console.log('called');
      if (searchterm.length === 0) {
        return;
      }
      dispatch(loadArticleDataBySearchTerm(searchterm));
    };
  
  return (
    

      
    <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
  
    <input
          id="search-bar"
          value={searchterm}
          type="search"
          className="form-control mr-sm-2"
          onChange={(e) => setSearchTerm(e.currentTarget.value)}
          placeholder="Search Reddit"
        />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
   

     );
}
