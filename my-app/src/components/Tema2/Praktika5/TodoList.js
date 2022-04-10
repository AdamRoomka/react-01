import React from "react";
import data from "../../../data/todoList.json";
import TodoListCard from "./TodoListCard";
import { useState } from "react";

function TodoList() {
  const [status, setStatus] = useState(data);
  function changeStatus(id) {
    const updateStatus = [...status];
    updateStatus.forEach((key) => {
      if (key.id === id) {
        key.status = true;
      }
    });
    setStatus(updateStatus);
  }

  function handleDelete(id){
      const counters = status.filter((c) => c.id !== id);
      setStatus(counters);
  }


  const taskData = status.map((data) => {
    return (
      <TodoListCard
        key={data.id}
        id={data.id}
        task={data.task}
        status={data.status}
        changeStatus={changeStatus}
        onDelete={handleDelete}
      />
    );
  });

  return <>{taskData}</>;
}

export default TodoList;