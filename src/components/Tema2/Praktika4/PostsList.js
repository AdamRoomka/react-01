import React from 'react';
import data from "../../../data/learning.json";
import PostContent from "../../Tema1/PostContent";
import { useState } from 'react';

function PostsList(){
    const [posts, setPosts] = useState(data);

    function changeStatus(id){
        const updatePosts = [...posts];
        updatePosts.forEach((post) => {
            if (post.id === id){
               post.status = true;
            }
        });
        setPosts(updatePosts);
    }

    const postsList = posts.map((post) => {
        return (
            
            <PostContent
                key = {post.id}
                id = {post.id}
                title = {post.taskTitle}
                content = {post.content}
                img = {post.img}
                status = {post.status}
                changeStatus = {changeStatus}
            />
        );
    });
    return <div className='row'>{postsList.length ? postsList : "Empty :("}</div>;
}

export default PostsList;