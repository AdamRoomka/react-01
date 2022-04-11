import React from 'react'


export default function Card({ name, email, id, image, location }) {
   

    return (
        <div className="card mb-4 box-shadow">
            <div className="card-header">
                <h4 className="my-0 font-weight-normal">{name} </h4>
            </div>
            <div className="card-body">
                <img src={image} alt={name} />
                <ul className="list-unstyled mt-3 mb-4">
                    <li>{email}</li>
                    <li>{location}</li>
                </ul>
                <button
                    type="button"
                    className="btn btn-lg btn-block btn-outline-primary">
                </button>
            </div>
        </div>
    )
}
