import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

function Data(){
    const [users, setUsers] = useState([]);
    useEffect(() =>{
        axios
        .get("https://api.github.com/users")
        .then((res) =>{
            setUsers(res.data);
        });
    }, []);

    const usersData = users.map((data) =>{
        return(
            <Card
                key={data.id}
                id={data.id}
                login={data.login}
                nodeID={data.nodeID}
                avatarUrl={data.avatar_url}
                url={data.url}
            />
        );
    });
    return<>{usersData}</>
}
export default Data;