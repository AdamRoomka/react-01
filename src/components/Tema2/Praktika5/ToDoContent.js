import React from 'react';

function ToDoContents(props){
    let {text, check, deleter} = props;
    return (
        <div className="col-12">
                <input type="text" />
                <input type="submit" />
                
                <div className="container">
                    <div className="row">
                        <div className="col-10">
                            <h4>{text}</h4>
                        </div>
                        <div className="col-2">

                        <button onClick={() => changeTodo(task)} className='btn btn-light'>Checked</button>

                        <button className='btn btn-danger'>Delete</button>
                        </div> 
                    </div>    
                </div>
        </div>
    );
}
export default ToDoContents;