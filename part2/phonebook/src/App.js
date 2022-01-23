import React, { useState, useEffect } from "react";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";
import Error from "./components/Error";
import phonebookService from "./services/phonebook";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchString, setSearchString] = useState("");
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    phonebookService.getAll().then((response) => setPersons(response));
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };

    if (!newName || !newNumber) {
      window.alert("Please fill out all fields");
    } else if (persons.some((person) => person.name === newName)) {
      const id = persons.find((person) => person.name === newName).id;

      window.alert(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      );

      phonebookService
        .update(id, personObject)
        .then((response) => {
          let newPersons = persons.filter((person) => person.id !== id);
          setPersons(newPersons.concat(response));
          setNotificationMessage(
            `${newName}'s information has been updated in the phonebook`
          );
        })
        .catch((error) => {
          setErrorMessage(
            `${newName}'s information has already been deleted from the server`
          );
          setPersons(persons.filter((n) => n.id !== id));
        });
    } else {
      phonebookService.create(personObject).then((response) => {
        setPersons(persons.concat(response));
        setNotificationMessage(`${newName} has been added to the phonebook`);
      });
    }

    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );

    setNewName("");
    setNewNumber("");
    setTimeout(() => {
      setNotificationMessage(null);
      setErrorMessage(null);
    }, 3000);
  };

  const removePerson = (id) => {
    window.alert("Are you sure you want to remove this entry from phonebook?");
    phonebookService.remove(id).then(() => {
      let newPersons = persons.filter((person) => person.id !== id);

      setPersons(newPersons);
      setNotificationMessage(`Entry has been removed from the phonebook`);
    });
    setTimeout(() => {
      setNotificationMessage(null);
    }, 3000);
  };

  const filterHandler = (event) => {
    setSearchString(event.target.value.toLowerCase());
  };

  return (
    <div className="container">
      <Notification message={notificationMessage} />
      <Error message={errorMessage} />

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
