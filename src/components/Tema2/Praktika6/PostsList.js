import React, { useState, useEffect } from "react";
const url = 'https://api.github.com/posts';
const PostsList = () => {
    const [Posts, setPosts] = useState([]);
    const getPosts = async () =>{
    const response = await fetch(url);
    const Posts = await response.json();
    setPosts(Posts);
};
useEffect(()=>{
    getPosts();
}, []);
return (
    <div className="row">{Posts}</div>
    // console.log(Posts)
);
};

export default PostsList;