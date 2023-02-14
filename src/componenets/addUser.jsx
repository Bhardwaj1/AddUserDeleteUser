import React from "react";
import { Button } from "react-bootstrap";
import { fakeData } from "../api";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slice/user";

const AddUser = () => {
  const dispatch=useDispatch();
  const addNewUser = (payload) => {
    console.log(payload);
    dispatch(addUser(payload));
  };
  
  return (
    <div className="add-user container">
      <Button
        variant="primary"
        className="add-user"
        onClick={() => addNewUser(fakeData())}
      >
        Primary
      </Button>
      <h1>Add User</h1>
    </div>
  );
};

export default AddUser;
