import React, { useState, useEffect } from "react";
const url = 'https://api.github.com/comments';
const CommentsList = () => {
    const [comments, setComments] = useState([]);
    const getComments = async () =>{
    const response = await fetch(url);
    const comments = await response.json();
    setComments(comments);
};
useEffect(()=>{
    getComments();
}, []);
return (
    <div className="row">{comments}</div>
    // console.log(comments)
);
};

export default CommentsList;