import React from "react";
import './table.css'


function ListCardMokinys({ id, vardas, pavarde, gm, miestas, programa, grupe, status}) {

  var gim = gm.toString().substr(0,10);

  const addStudent = (data) => {
    if (editingId) {
      // PUT METHOD fetch
      fetch("http://localhost:4000/api/v1/students/" + editingId, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => {
          console.log(res);
          getStudents();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // POST METHOD
      fetch("http://localhost:4000/api/v1/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => {
          console.log(res);
          getStudents();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  //  PUT METHOD item
  const editStudent = (data) => {
    setEditingID(data._id);
    setCurrentStudent(data);
  };

  // DELETE METHOD
  const deleteStudent = (id) => {
    fetch(`http://localhost:4000/api/v1/students/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res);
      getStudents();
    });
  };

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