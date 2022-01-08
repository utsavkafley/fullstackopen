import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

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
      setNewName("");
      setNewNumber("");
    }
  };

  const listStyle = {
    listStyleType: "none",
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <tbody>
          <tr>
            <td>
              <label>name: </label>
            </td>
            <td style={{ paddingLeft: ".5rem" }}>
              <input
                value={newName}
                onChange={(event) => {
                  setNewName(event.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>number: </label>
            </td>
            <td style={{ paddingLeft: ".5rem" }}>
              <input
                value={newNumber}
                onChange={(event) => {
                  setNewNumber(event.target.value);
                }}
              />
            </td>
          </tr>
        </tbody>

        <div>
          <button type="submit" onClick={addPerson}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <tbody>
        {persons.map((person) => (
          <tr key={person.name}>
            <td>{person.name} </td>
            <td style={{ paddingLeft: ".5rem" }}>{person.number}</td>
          </tr>
        ))}
      </tbody>
    </div>
  );
};

export default App;
