import React from "react";

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
    <div className="col-12 d-flex my-3">
      <p className={"bg-light-yellow py-2 ps-1 m-0 w-75 rounded"}>
        {vardas} {pavarde} {gim} {miestas} {programa} {grupe}
      </p>
      <button className="btn btn-light btn-sm mx-2">
        Redaguoti
      </button>
        <button className="btn btn-danger btn-sm">Delete</button>
    </div>
  );
}

export default ListCardMokinys;