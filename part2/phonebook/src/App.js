import React, { useState, useEffect } from "react";
import axios from "axios";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    const eventHandler = (response) => setPersons(response.data);

    axios.get("http://localhost:3001/persons").then(eventHandler);
  }, []);

  const addPerson = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      };

      setPersons(persons.concat(personObject));

      Array.from(document.querySelectorAll("input")).forEach(
        (input) => (input.value = "")
      );

      setNewName("");
      setNewNumber("");
    }
  };

  const filterHandler = (event) => {
    setSearchString(event.target.value.toLowerCase());
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchString={searchString} filterHandler={filterHandler} />

      <h2>Add a new</h2>
      <PersonForm
        name={newName}
        nameChangeHandler={(event) => {
          setNewName(event.target.value);
        }}
        number={newNumber}
        numberChangeHandler={(event) => {
          setNewNumber(event.target.value);
        }}
        addPersonHandler={addPerson}
      />

      <h2>Numbers</h2>
      <Persons persons={persons} searchString={searchString} />
    </div>
  );
};

export default App;
