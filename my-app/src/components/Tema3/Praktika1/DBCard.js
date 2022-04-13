import React from 'react'
import { useState, useEffect } from "react";
import ListCardMokinys from "./ListCardMokinys";

function DBCard(){

  
  let [students, setStudents] = useState([]);
  // let [isLoading, setIsLoading] = useState(true);

  const getAllStudents = async () => {
    fetch('http://localhost:3000/api/v1/students')
      .then(res => res.json())
      .then((json) => {
        setStudents(json.data.students);
        // setIsLoading(false);
      })
  }

  useEffect( ()=>{
    getAllStudents();
  }, [])


  // DELETE METHOD
  const deleteStudent = (id) => {
    fetch(`http://localhost:3000/api/v1/students/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res);
    });
    // const counters = taskData.filter((c) => c.id !== id);
    // setStudents(counters);
  };


    const taskData = students.map((data) => {
    return (
      <>
      <ListCardMokinys 
        key={data._id}
        id={data._id}
        vardas={data.name}
        pavarde={data.surname}
        gm={data.birthdate}
        miestas={data.town}
        programa={data.program}
        grupe={data.group}
        deleteStudent={deleteStudent}
      />
      </>
    );
  });
  return <>{taskData}</>;
  
}
export default DBCard