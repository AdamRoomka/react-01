import React from 'react';
import { useState } from 'react';

function Button(){
    const [color, setColor] = useState(false);


    function changeColor(){
        setColor(!color);
    }
  return (
    <div className="col-4 mb-4 me-1 border rounded border-dark text-center">
        <h2 className='text-danger'>Praktika 1</h2>
        <h3 className='col-12'>
            Task is {color ? "Done!" : "NOT DONE!"}
        </h3>
        <p className='col-12'>
            Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <button className={color ? "bg-success mb-4" : "bg-danger mb-4"} onClick={changeColor} >
            {color ? "Done" : "Not done"}
        </button>
    </div>
  )
}

export default Button;