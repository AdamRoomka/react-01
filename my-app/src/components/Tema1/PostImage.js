import React from 'react';
import './PostImage.css';

function PostImage(image) {
  let {PostImage} = image;
  return (
    <div>
        <img src={PostImage} alt="wallpaper" className='IMG' />
    </div>
  )
}


export default PostImage;