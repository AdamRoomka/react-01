import React from "react";
import './table.css'


function ListCardMokinys({ id, vardas, pavarde, gm, miestas, programa, grupe, editStudent, deleteStudent}) {

  var gim = gm.toString().substr(0,10);
  

  return (

    <>
      <tr>
        <td>{vardas}</td>
        <td>{pavarde}</td>
        <td>{gim}</td>
        <td>{miestas}</td>
        <td>{programa}</td>
        <td>{grupe}</td>
        <td><button onClick={() => editStudent(id)} className="btn btn-warning">Redaguoti</button></td>
        <td><button onClick={() => deleteStudent(id)} className="btn btn-danger">Istrinti</button></td>
      </tr>
    </>
  );
}

export default ListCardMokinys;