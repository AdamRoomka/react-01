import React from 'react'
import './Header.css';

function Header(props) {
  console.log(props);
  let {HeaderTitle, HeaderImage} = props;
  return (
    <div className='Image'>
        <h1 className="Header-title">{HeaderTitle}</h1>
        <div className="Image">
          <div className="Height">
            <img className="Header_image" src={HeaderImage} alt="" />
          </div>
        </div>
    </div>
  )
}


export default Header;