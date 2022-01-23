import React from "react";
import Person from "./Person";

const Persons = ({ persons, searchString, deleteButtonHandler }) => {
  return (
    <>
      {" "}
      <table>
        <tbody>
          {persons
            .filter((person) =>
              person.name.toLowerCase().includes(searchString)
            )
            .map((person) => (
              <Person
                key={person.id}
                person={person}
                deleteButtonHandler={deleteButtonHandler}
              />
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Persons;
