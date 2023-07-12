import React, { useState } from "react";
import "./App.css";
import { Filtro } from "./components/Filtro";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newTel, setNewTel] = useState("");

  const handlePesonChamge = (e) => {
    setNewName(e.target.value);
  };

  const handleTelChamge = (e) => {
    setNewTel(e.target.value);
  };

  const addName = (e) => {
    e.preventDefault();
    const nameObject = {
      name: newName,
      number: newTel,
    };
    if (persons.findIndex((person) => person.name === newName) === -1) {
      setPersons(persons.concat(nameObject));
      setNewName("");
      setNewTel("");
    } else {
      alert(`${newName} ya existe en la guía telefónica`);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <Filtro />
        <hr />
        <div>
          name: <input value={newName} onChange={handlePesonChamge} />
        </div>
        <div>
          tel: <input value={newTel} onChange={handleTelChamge} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>
            {person.name}: {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
