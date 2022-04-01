import React from 'react';
import Image from "./Battier.jpg"
import { useState } from 'react';

function Post(){
    const [like, setLike] = useState(0);
    const [hate, setHate] = useState(0);

    function Like(){
        setLike(like + 1);
    }
    function Hate(){
        setHate(hate + 1);
    }
    function Reset(){
        setLike(0);
        setHate(0);
    }
  return (
    <div className="col-4 mb-4 ms-1 border border-dark rounded text-center">
        <h2 className='text-danger'>Praktika 2</h2>
        <img src={Image} alt="Battier" className='w-100 mt-1' />
        <h4>
            Shane Battier in 10 years!
        </h4>
        <button className="m-1 btn btn-success" onClick={Like} >
            {"Like " + like }
        </button>
        <button className="m-1 btn btn-danger" onClick={Hate}>
            {"Hate " + hate }
        </button>
        <button className="m-1 btn btn-primary" onClick={Reset}>
            {"Reset"}
        </button>
    </div>
  )
}

export default Post;