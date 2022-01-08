import React from "react";
import Person from "./Person";

const Persons = ({ persons, searchString }) => {
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
              <Person key={person.name} person={person} />
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Persons;
