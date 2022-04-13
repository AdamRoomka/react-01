import React from 'react';

function PostContent(props){
  let {title, content, img} = props;
  return (
    <div className="col-4">
        <img src={img} className="img-fluid" alt={title} />
        <h3>{title}</h3>
        <p>{content}</p>
    </div>
  );
}

export default PostContent;