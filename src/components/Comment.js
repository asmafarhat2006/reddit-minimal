import React from 'react';
 


const Comment = ({coms, userName}) => {
    return( 
        <div className='getReplies'>
           <h3 className='userName'>{userName}</h3>
           <h6>{coms}</h6>
        </div>
     );
}
 
 export default Comment;