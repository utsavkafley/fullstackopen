import React from "react";

const Person = ({ person, deleteButtonHandler }) => {
  return (
    <>
      <tr key={person.id}>
        <td>{person.name}</td>
        <td style={{ paddingLeft: "1rem" }}>{person.number}</td>
        <td>
          <button onClick={() => deleteButtonHandler(person.id)}>delete</button>
        </td>
      </tr>
    </>
  );
};

export default Person;
