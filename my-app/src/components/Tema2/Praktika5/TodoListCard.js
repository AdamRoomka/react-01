import React from "react";
import './TodoListCard.css';
import { FiCheck } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

function TodoListCard({ id, task, status, changeStatus, onDelete}) {
  return (
    <div className="col-5 d-flex m-3">
      <p
        className={
          status ? "bg-light-green p-2 m-0 rounded" : "bg-light-yellow p-2 m-0 rounded"
        }
      >
        {status ? <FiCheck /> : <FiChevronRight />}
        {task}
      </p>
      <button
        onClick={() => changeStatus(id)}
        className="btn btn-light btn-sm mx-2"
      >
        {status ? "Done" : "Check"}
      </button>
        <button onClick={() => onDelete(id)} className="btn btn-danger btn-sm">Delete</button>
    </div>
  );
}

export default TodoListCard;