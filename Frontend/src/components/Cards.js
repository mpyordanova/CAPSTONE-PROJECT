 import React from 'react';

function Card({post}) {
return(
 
 <div className="card">
      {/* <img className="br-100 h3 w3 dib" alt={post.name} src={process.env.PUBLIC_URL + post.imgPath} /> */}
      <div>
        <h2>{post.title}</h2>
        <h3>{post.category}</h3>
        <p>{post.description}</p>
        <h3>{post.likes}</h3>
      </div>
    </div> 
    
  );
 }

export default Card;
