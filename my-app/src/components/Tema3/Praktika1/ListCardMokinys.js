import React from "react";
import './table.css'

function ListCardMokinys({ id, vardas, pavarde, gm, miestas, programa, grupe, status}) {

  var gim = gm.toString().substr(0,10);

  // var requestOptions = {
  //   method: 'DELETE',
  //   redirect: 'follow'
  // };
  
  // fetch("http://localhost:3000/api/v1/students", requestOptions)
  //   .then(response => response.text())
  //   .then(result => console.log(result))
  //   .catch(error => console.log('error', error));

  return (
    <>

      <tr>
        <td>{vardas}</td>
        <td>{pavarde}</td>
        <td>{gim}</td>
        <td>{miestas}</td>
        <td>{programa}</td>
        <td>{grupe}</td>
        <td><button className="btn btn-warning">Redaguoti</button></td>
        <td><button className="btn btn-danger">Istrinti</button></td>
      </tr>
    </>
  );
}

export default ListCardMokinys;