import React from 'react'
import data from "../../../data/mokinioDuomenys.json";
import ListCardMokinys from "./ListCardMokinys";
import { useState } from "react";

function DBCard() {
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
      <ListCardMokinys
        id={data.id}
        vardas={data.vardas}
        pavarde={data.pavarde}
        gm={data.gm}
        miestas={data.miestas}
        programa={data.programa}
        grupe={data.grupe}
        changeStatus={changeStatus}
        onDelete={handleDelete}
      />
    );
  });
  return <>{taskData}</>;
}
export default DBCard