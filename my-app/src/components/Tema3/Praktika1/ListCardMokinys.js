import React from "react";


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