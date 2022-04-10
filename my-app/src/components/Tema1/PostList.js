import React from 'react';
import PostContent from './PostContent';
import './PostContent.css';
import { v4 as uuidv4 } from 'uuid';

function PostList() {
  let posts =[
    {
      title: "HTML",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, molestiae. Magnam enim pariatur ipsa incidunt!",
      img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
    },
    {
      title: "CSS",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, molestiae. Magnam enim pariatur ipsa incidunt, reprehenderit possimus voluptatibus porro eaque labore aspernatur commodi distinctio unde adipisci eos nulla, harum fugiat!",
      img: "https://wallpaperaccess.com/full/1249645.jpg"
    },
    {
      title: "JavaScript",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, molestiae. Magnam enim pariatur ipsa incidunt, reprehenderit possimus voluptatibus porro eaque!",
      img: "https://wallpaperaccess.com/full/1249635.jpg"
    }
  ];

  let list = posts.map((post) => {
    return(
        <div className='col-4'>
            <PostContent 
                key={uuidv4()}
                title={post.title} 
                content={post.content}
                img={post.img} 
            />
        </div>
    );
  });

  return (
    <div className="row">{list}</div>
  )
}


export default PostList;