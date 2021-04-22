
import React from 'react';
import Articles from '../features/Articles/Articles';
import SearchBar from '../components/SearchBar';
import Categories from '../features/Categories/Categories';
import PostDetail from '../components/PostDetail';
import { FcReddit } from "react-icons/fc";

import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useRouteMatch,
  Link,
} from "react-router-dom";
function App() {
  return (
    <div className='App'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/posts"><FcReddit/> Reddit Minimal</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/posts">Home <span className="sr-only">(current)</span></a>
            </li>
          
          </ul>
        <SearchBar/>
        </div>
      </nav>
   
       
       
       
       
    <Router>
  
    
      <Switch>
      <Route path="/posts">
      <div class="container-fluid">
        <div class="row"> 
          <div class="col-md-3" >
          <Nav className="flex-column">
            <h6>SubReddits</h6>
         <Categories/>
     
          </Nav>
          </div>
 
          <div class="col">
          <Articles /></div>
          </div>
      </div>
   
        </Route>
      <Route path="/post/:postId">
          <PostDetail />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
