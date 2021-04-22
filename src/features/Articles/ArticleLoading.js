import React from 'react';
import Skeleton from 'react-loading-skeleton';
import {
    TiArrowUpOutline,
    TiArrowDownOutline,
    
  } from 'react-icons/ti';
import Card from 'react-bootstrap/Card';

const ArticleLoading = () => {
  return (
    <Card style={{width:'50rem'}}>
    <Skeleton width={100} />
    <div className="card-body">
    <div className="post-votes-container">
        <button
          type="button"
          className="icon-action-button up-vote"
          aria-label="Up vote"
        >
          <TiArrowUpOutline className="icon-action" />
        </button>
        <Skeleton className="post-votes-value post-votes-value-loading" />
        <button
          type="button"
          className="icon-action-button down-vote"
          aria-label="Down vote"
        >
          <TiArrowDownOutline className="icon-action" />
        </button>
      </div>
      <Skeleton width={200} height={100} />
    </div>
    </Card>
   
  );
};

export default ArticleLoading;
