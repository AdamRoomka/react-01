import React from "react";
import { FiCheck } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

function ListCardMokinys({ id, vardas, pavarde, gm, miestas, programa, grupe, status, changeStatus, onDelete}) {
  return (
    <div className="col-12 d-flex my-3">
      <p
        className={
          status ? "bg-light-green py-2 ps-1 m-0 w-75 rounded" : "bg-light-yellow py-2 ps-1 m-0 w-75 rounded"
        }
      >
        {status ? <FiCheck /> : <FiChevronRight />}
        {vardas} {pavarde} {gm} {miestas} {programa} {grupe}
      </p>
      <button
        onClick={() => changeStatus(id)}
        className="btn btn-light btn-sm mx-2"
      >
        {status ? "Pateiktas" : "Pateikti"}
      </button>
        <button onClick={() => onDelete(id)} className="btn btn-danger btn-sm">Delete</button>
    </div>
  );
}

export default ListCardMokinys;