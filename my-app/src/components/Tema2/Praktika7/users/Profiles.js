import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";

function Profiles() {
    let { login } = useParams();
    const [users, setUsers] = useState([]);
    useEffect(() =>{
        axios
        .get(`https://api.github.com/users/${login}`)
        .then((res) =>{
            setUsers(res.data);
        });
    });

  return (
    <div className='container'>
        <h1>Profile:</h1>
        <div className="row bg-light p-4 w-50 rounded">
            
            <div className="col-5">
                <img src={users.avatar_url} alt="avatar" className='rounded w-100' />
            </div>
            <div className="col-6">
                <div className="d-flex">
                    <h4>Username:</h4> <p className=' ps-3 fs-5'>{login}.</p>
                </div>
                <p className='w-100 text-danger'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repellat ratione delectus. Quidem repellat fugiat, omnis nobis voluptas, fugit hic delectus ipsum blanditiis maxime perferendis doloremque rem similique ducimus ut.</p>
            </div>
        </div>
    </div>
  )
}

export default Profiles;