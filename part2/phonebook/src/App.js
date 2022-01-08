import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleInputChange = (event) => {
    setNewName(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      const personObject = {
        name: newName,
      };

      setPersons(persons.concat(personObject));
      setNewName("");
    }
  };

  const listStyle = {
    listStyleType: "none",
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleInputChange} />
        </div>
        <div>
          <button type="submit" onClick={addPerson}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p style={{ margin: 0 }} key={person.name}>
          {person.name}
        </p>
      ))}
    </div>
  );
};

export default App;
