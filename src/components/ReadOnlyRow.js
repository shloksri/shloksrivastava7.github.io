import React from "react";
import Button from "react-bootstrap/Button";

const ReadOnlyRow = ({ person, onEdit, onDelete }) => {
  return (
    <tr>
      <td>{person.id}</td>
      <td>{person.email}</td>
      <td>{person.first_name}</td>
      <td>{person.last_name}</td>
      <td>
        <img src={person.avatar} alt="avatar" />
      </td>
      <td>
        <Button
          className="button"
          variant="outline-dark"
          type="button"
          onClick={(event) => onEdit(event, person)}
        >
          Edit
        </Button>
        <br />
        <Button
          className="button"
          variant="outline-dark"
          type="button"
          onClick={() => onDelete(person.id)}
        >
          Delete
        </Button>
        {/* <button type="button" onClick={(event) => onEdit(event, person)}>
          Edit
        </button>
        <button type="button" onClick={() => onDelete(person.id)}>
          Delete
        </button> */}
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
