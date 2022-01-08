import React from "react";

const Person = ({ person }) => {
  return (
    <>
      <tr key={person.name}>
        <td>{person.name}</td>
        <td style={{ paddingLeft: "1rem" }}>{person.number}</td>
      </tr>
    </>
  );
};

export default Person;
