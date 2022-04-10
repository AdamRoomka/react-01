import React from 'react';

function PostContent(props){
  let {id, title, content, img, status, changeStatus} = props;
  return (
    <div className="col-4">
        <img src={img} className="img-fluid" alt={title} />
        <h3>{title}</h3>
        <p>{content}</p>
        <p>{status ? "Ismokau" : "Mokausi"}</p>
        <button onClick={() => changeStatus(id)}className='btn btn-light'>
            Ok
        </button>
    </div>
  );
}

export default PostContent;