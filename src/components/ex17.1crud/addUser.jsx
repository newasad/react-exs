import React, { useState } from "react";
import "./addUser.style.css";
export const AddUser = ({title, onAddClick }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });
  const onFormSubmit = (e) => {
    e.preventDefault();
    onAddClick(data);
  };
  const onInputChange = (e) => {
    const userData = { ...data };
    userData[e.target.name] = e.target.value;
    setData(userData);
  };
  return (
    <div className="user">
      <form action="" onSubmit={onFormSubmit}>
        <h1 className="addHeader">{title} User</h1>
        <label htmlFor="name">Name :</label>
        <input type="text" name="name" onChange={onInputChange} />
        <label htmlFor="username">Username :</label>
        <input type="text" name="username" onChange={onInputChange} />
        <label htmlFor="email">Email :</label>
        <input type="email" name="email" onChange={onInputChange} />
        <label htmlFor="password">Password :</label>
        <input type="password" name="password" onChange={onInputChange} />
        <input type="submit" value="Confirm" name="add" />
      </form>
    </div>
  );
};
