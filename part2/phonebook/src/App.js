import React, { useState, useEffect } from "react";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import phonebookService from "./services/phonebook";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    phonebookService.getAll().then((response) => setPersons(response));
  }, []);

  const addPerson = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      window.alert(`${newName} is already added to phonebook`);
    } else if (!newName || !newNumber) {
      window.alert("Pkease fill out all fields");
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      };

      phonebookService
        .create(personObject)
        .then((response) => setPersons(persons.concat(response)));

      Array.from(document.querySelectorAll("input")).forEach(
        (input) => (input.value = "")
      );

      setNewName("");
      setNewNumber("");
    }
  };

  const removePerson = (id) => {
    window.alert("Are you sure you want to remove this entry from phonebook?");
    phonebookService.remove(id).then(() => {
      let newPersons = persons.filter(
        (person) => person.id !== id
      )

      setPersons(newPersons);
    });
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
      <Persons
        persons={persons}
        searchString={searchString}
        deleteButtonHandler={removePerson}
      />
    </div>
  );
};

export default App;
