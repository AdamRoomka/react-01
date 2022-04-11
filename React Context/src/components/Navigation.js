import React from 'react'

export default function Navigation() {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
            <h5 className="my-0 mr-md-auto font-weight-normal">React Context</h5>
            <nav className="my-2 my-md-0 mr-md-3">
                <a className="p-2 text-dark" href="0#">Example1</a>
                <a className="p-2 text-dark" href="0#">Example2</a>
                <a className="p-2 text-dark" href="0#">Example3</a>
                <a className="p-2 text-dark" href="0#">Example4</a>
            </nav>
            <a className="btn btn-outline-primary" href="#">Sign up</a>
        </div>
    )
}
