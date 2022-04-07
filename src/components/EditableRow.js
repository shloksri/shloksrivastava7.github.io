import React from "react";
import Button from "react-bootstrap/Button";

const EditableRow = ({ editPerson, onEdit }) => {
  return (
    <tr>
      <td>{editPerson.id}</td>
      <td>
        <input type="text" name="email" value={editPerson.email} onChange={onEdit}></input>
      </td>
      <td>
        <input
          type="text"
          name="first_name"
          value={editPerson.first_name}
          onChange={onEdit}
        ></input>
      </td>
      <td>
        <input type="text" name="last_name" value={editPerson.last_name} onChange={onEdit}></input>
      </td>
      <td>
        <img src={editPerson.avatar} alt="avatar" />
      </td>
      <td>
        <Button className="button" variant="outline-dark" type="submit">
          Save
        </Button>
      </td>
    </tr>
  );
};

export default EditableRow;
