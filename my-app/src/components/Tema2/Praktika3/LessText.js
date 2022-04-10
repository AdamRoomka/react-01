import React from 'react';
import { useState } from 'react';

function LessTekst(props){

  let {maxLength, color, textDecoration, text} = props;
  const [read, setRead] = useState(false);

  function changeRead(){
    setRead(!read);
  }

  return (
    <div className="col-3 mb-4 ms-1 border border-dark rounded text-center">
      <h2 className='text-danger col-12'>Praktika 3</h2>
        <p className='col-12'>
          {read ? text : `${text.substring(0, maxLength)}`}
        </p>
        
        <p className='col-12' Style={`color: ${color}; text-decoration: ${textDecoration};`} onClick={changeRead}>
          {read ? "read less" : "read more"}
        </p>

    </div>
  )
}

export default LessTekst;