import React from "react";
import { useForm } from "react-hook-form";

function StudentAddForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  // watch input value by passing the name of it
  console.log(watch("firstName"));

  function paspaudzius(){
    document.getElementById('hide').classList.toggle('hide');
  }

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="col-8 m-2 offset-2">
      <h2> Add New Student</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            Vardas
          </label>
          <input
            
            type="text"
            className="form-control"
            id="firstName"
            {...register("firstName", { required: true, pattern: /^[A-Za-z]+$/i, minLength: 3, maxLength: 40 })}
            defaultValue="Jonas"
          />
          {errors.firstName && (
            <span className="text-danger fw-light">This field is required</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="lastname" className="form-label">
            Pavarde
          </label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            {...register("lastname", { required: true })}
            defaultValue="Jonaitis"
          />
          {errors.lastname && (
            <span className="text-danger fw-light">This field is required</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="gm" className="form-label">
            Gimimo metai
          </label>
          <input
            type="date" value="2022-02-20"
            className="form-control"
            id="gm"
            {...register("gm", { required: true })}
            defaultValue="JavaScript"
          />
          {errors.gm && (
            <span className="text-danger fw-light">This field is required</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            Miestas
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            {...register("city", { required: true })}
            defaultValue="Vilnius"
          />
          {errors.city && (
            <span className="text-danger fw-light">This field is required</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="program" className="form-label">
            Programa
          </label>
          <input
            type="text"
            className="form-control"
            id="program"
            {...register("program", { required: true })}
            defaultValue="Programavimas"
          />
          {errors.program && (
            <span className="text-danger fw-light">This field is required</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="group" className="form-label">
            Grupe
          </label>
          <input
            type="text"
            className="form-control"
            id="group"
            {...register("group", { required: true })}
            defaultValue="JS-21/2"
          />
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