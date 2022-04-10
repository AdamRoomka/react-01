import React, { useState, useEffect } from "react";
const url = 'https://api.github.com/users';
const UsersList = () => {
    const [users, setUsers] = useState([]);
    const getUsers = async () =>{
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
};
useEffect(()=>{
    getUsers();
}, []);
return (
    <div className="row">{users}</div>
    // console.log(users)
);
};

export default UsersList;