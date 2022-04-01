import React, { useState, useEffect } from "react";
import UsersList from "./UsersList"
import PostsList from "./PostsList"
import CommentsList from "./CommentsList"

function PageData() {
  const [type, setType] = useState("posts");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
           
  }, [type]);
  const getData = async (type) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/${type}`);
        const data = await response.json();
        setData(data);
        console.log(data);
      }; 
      useEffect(() => {
        getData(type);
      }, [type]);
  return (
    <div>
      <button onClick={() => setType("posts")}>posts</button>
      <button onClick={() => setType("users")}>users</button>
      <button onClick={() => setType("comments")}>comments</button>

    <div className="m-2 p-3 fs-4 bg-success text-light">
        <div>
            {type === "posts" ? <PostsList data={data} /> : type === "comments" ? <CommentsList  data={data}/> : <UsersList  data={data}/>}
        </div>
    </div>
    
    </div>
    
  );
}
export default PageData;