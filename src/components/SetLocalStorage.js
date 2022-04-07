import React, { useState, useEffect, Fragment } from "react";
import Table from "react-bootstrap/Table";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import "bootstrap/dist/css/bootstrap.min.css";
import "./my-sass.scss";

const SetLocalStorage = (props) => {
  const [users, setUsers] = useState([...props.send]);

  if (!localStorage.getItem("users")) {
    localStorage.users = JSON.stringify(users);
  }

  const [editFormData, setEditFormData] = useState({
    id: "",
    email: "",
    first_name: "",
    last_name: "",
    avatar: "",
  });

  const [editUserId, setUserId] = useState(null);

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedUser = {
      id: editFormData.id,
      email: editFormData.email,
      first_name: editFormData.first_name,
      last_name: editFormData.last_name,
      avatar: editFormData.avatar,
    };

    const newUsers = [...users];

    const index = users.findIndex((user) => user.id === editedUser.id);

    newUsers[index] = editedUser;

    setUsers(newUsers);
    setUserId(null);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setUserId(contact.id);

    const formValues = {
      id: contact.id,
      email: contact.email,
      first_name: contact.first_name,
      last_name: contact.last_name,
      avatar: contact.avatar,
    };

    setEditFormData(formValues);
  };

  const handleDeleteClick = (contactId) => {
    console.log("I am onDelete of todo = ", contactId);

    setUsers(
      users.filter((t) => {
        return t.id !== contactId;
      })
    );
    localStorage.setItem("users", JSON.stringify(users));
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <div>
      <div>
        <form onSubmit={handleEditFormSubmit}>
          <Table striped bordered hover className="table">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Avatar</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <Fragment>
                  {editUserId === user.id ? (
                    <EditableRow editPerson={editFormData} onEdit={handleEditFormChange} />
                  ) : (
                    <ReadOnlyRow
                      person={user}
                      onEdit={handleEditClick}
                      onDelete={handleDeleteClick}
                    />
                  )}
                </Fragment>
              ))}
            </tbody>
          </Table>
        </form>
      </div>
    </div>
  );
};

export default SetLocalStorage;
