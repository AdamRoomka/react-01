import React from 'react';
import { Link } from "react-router-dom";

function Card({ login, nodeID, avatarUrl}) {
  return (
    <>
        <div className='col-3'>
            <img
                src={avatarUrl}
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                aria-label="Placeholder: 140x140"
                focusable="false"
            />
            <h2>Login: {login}</h2>
            <p>Node ID: {nodeID}</p>
            <p>

                <Link to={`/Tema2/profile/${login}`}>

                <button className="btn btn-secondary">View details &raquo;</button>

                </Link>

            </p>
        </div>    
    </>
  );
}

export default Card