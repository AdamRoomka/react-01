import React from 'react'
import DBCard from './Tema3/Praktika1/DBCard'
import StudentAddForm from './Tema3/Praktika1/Add/StudentAddForm'
import './Tema3/Praktika1/table.css'


function Tema3() {
  return (
    <>
    
    <div className="container">
        <div className="row">
          <div className='col-4 position'>
            <StudentAddForm />
          </div>
          <div className="col-8 right">
          <table>
            <tr>
              <th>Vardas</th>
              <th>Pavarde</th>
              <th>Gimimo metai</th>
              <th>miestas</th>
              <th>Programa</th>
              <th>Grupe</th>
            </tr>

            <DBCard />
          </table>
          </div>

        </div>
    </div>
      

    </>
  )

  
}

export default Tema3