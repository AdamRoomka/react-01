import React, {useState} from "react";
import { useForm } from "react-hook-form";

function StudentAddForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



  let [ name, setName] = useState("")
  let [ surname, setSurname] = useState("")
  let [ birthdate, setBirthdate] = useState("")
  let [ program, setProgram] = useState("")
  let [ town, setTown] = useState("")
  let [ group, setGroup] = useState("")
  

  function onSubmit(e) {
    console.log(name)

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({name: name, surname: surname, birthdate:birthdate, program:program,town:town,group:group})
    };

    fetch('http://localhost:3000/api/v1/students', requestOptions)
    .then(response => response.json())
  
  }

  function paspaudzius(){
    document.getElementById('hide').classList.toggle('hide');
  }
  
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="col-8 m-2 offset-2">
      <h2> Add New Student</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
          <label htmlFor="firstName" className="form-label">
            Vardas
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName field_ucfirst"
            {...register("firstName", {  required: true, pattern: /[A-Z][A-Za-z]/, minLength: 3, maxLength: 40 })}
            onChange={(e)=>{setName(e.target.value)}}
          />
          {errors.firstName && (
            <span className="text-danger fw-light">This field is required</span>
          )}
        </div>
        <div className="mb-2">
          <label htmlFor="lastname" className="form-label">
            Pavarde
          </label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            {...register("lastname", { pattern: /[A-Z][A-Za-z]/, required: true })}
            onChange={(e)=>{setSurname(e.target.value)}}
          />
          {errors.lastname && (
            <span className="text-danger fw-light">This field is required</span>
          )}
        </div>
        <div className="mb-2">
          <label htmlFor="gm" className="form-label">
            Gimimo metai
          </label>
          <input
          type="date"
            className="form-control"
            id="gm"
            {...register("gm", { required: true })}
            onChange={(e)=>{setBirthdate(e.target.value)}}
          />
          {errors.gm && (
            <span className="text-danger fw-light">This field is required</span>
          )}
        </div>
        <div className="mb-2">
          <label htmlFor="city" className="form-label">
            Miestas
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            {...register("city", { pattern: /[A-Z][A-Za-z]/, required: true, minLength: 3, maxLength: 20 })}
            onChange={(e)=>{setTown(e.target.value)}}
          />
          {errors.city && (
            <span className="text-danger fw-light">This field is required</span>
          )}
        </div>
        <div className="mb-2">
          <label htmlFor="program" className="form-label">
            Programa
          </label>
          <select className="form-control" {...register("program", { required: true })} name="program" id="program" onChange={(e)=>{setProgram(e.target.value)}}>
            <option value=""> --- Program --- </option>
            <option value="JavaScript">JavaScript</option>
            <option value="Java">Java</option>
            <option value="PHP">PHP</option>
            <option value="Python">Python</option>
          </select>
          {errors.program && (
            <span className="text-danger fw-light">This field is required</span>
          )}
        </div>
        <div className="mb-2">
          <label htmlFor="group" className="form-label">
            Grupe
          </label>
          <select className="form-control" {...register("group", { required: true })} name="group" id="group" onChange={(e)=>{setGroup(e.target.value)}}>
            <option value=""> --- Group --- </option>
            <option value="JS-21/1">JS-21/1</option>
            <option value="JS-21/2">JS-21/2</option>
            <option value="JS-21/3">JS-21/3</option>

            <option value="JP-21/1">JP-21/1</option>
            <option value="JP-21/2">JP-21/2</option>
            <option value="JP-21/3">JP-21/3</option>

            <option value="PHP-21/1">PHP-21/1</option>
            <option value="PHP-21/2">PHP-21/2</option>
            <option value="PHP-21/3">PHP-21/3</option>

            <option value="PY-21/1">PY-21/1</option>
            <option value="PY-21/2">PY-21/2</option>
            <option value="PY-21/3">PY-21/3</option>
          </select>
          {errors.group && (
            <span className="text-danger fw-light">This field is required</span>
          )}
        </div>

        <button onClick={paspaudzius} type="submit" className="btn btn-success">
          Add Student
        </button>
      </form>
    </div>
  );
}
export default StudentAddForm