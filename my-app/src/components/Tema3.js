import React from 'react'
import './Tema3/tema3.css'
import DBCard from './Tema3/Praktika1/DBCard'
import StudentAddForm from './Tema3/Praktika1/Add/StudentAddForm'

  function paspaudzius(){
    document.getElementById('hide').classList.toggle('hide');
  }

function Tema3() {
  return (
    <>
    
    <div className="container">
        <div className="row">
          <div className="col-6">
            <DBCard />
          </div>

        </div>
    </div>
    <button onClick={paspaudzius} className='btn btn-success offset-1'> Prideti </button>

    <div id='hide' className='hide' >
      <StudentAddForm />
    </div>

    </>
  )

  
}

export default Tema3