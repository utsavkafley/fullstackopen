import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchString, setSearchString] = useState("");

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

  const handleFilterInputChange = (event) => {
    setSearchString(event.target.value.toLowerCase());
  };
  return (
    <div>
      <h2>Phonebook</h2>
      filter names with{" "}
      <input value={searchString} onChange={handleFilterInputChange} />
      <form>
        <h2>add a new</h2>
        <table>
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
        </table>

        <div>
          <button type="submit" onClick={addPerson}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <table>
        <tbody>
          {persons
            .filter((person) =>
              person.name.toLowerCase().includes(searchString)
            )
            .map((person) => (
              <tr key={person.name}>
                <td>{person.name}</td>
                <td style={{ paddingLeft: "1rem" }}>{person.number}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
