import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const [enterdUserName, setEnterdUserName] = useState("");
  const [enterdAge, setEnterdAge] = useState("");
  const [eror, setEror] = useState();
  const addUserHandler = (e) => {
    e.preventDefault();
    if (enterdUserName.trim().length === 0 || enterdAge.trim().length === 0) {
      setEror({
        title: "Invalid Input",
        message: "Please enter a non empty Input",
      });
      return;
    }
    if (enterdAge < 1) {
      setEror({
        title: "Invalid Age",
        message: "Please enter a valid Age",
      });
      return;
    }
    props.onAddUser(enterdUserName, enterdAge);
    setEnterdUserName("");
    setEnterdAge("");
  };
  const userNameChange = (e) => {
    setEnterdUserName(e.target.value);
  };
  const ageChange = (e) => {
    setEnterdAge(e.target.value);
  };
  const erorHandler = (e) => {
    setEror(null);
  };
  return (
    <div>
      {eror && (
        <ErrorModal
          title={eror.title}
          message={eror.message}
          onConfirm={erorHandler}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            id="username"
            type="text"
            value={enterdUserName}
            onChange={userNameChange}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enterdAge}
            onChange={ageChange}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
