import React, { useState } from "react";
import { Listado } from "./Listado";

export const Formulario = ({ guiaTel }) => {
  const [persons, setPersons] = useState(guiaTel);
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
      <form onSubmit={addName}>
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
      <Listado persons={persons} />
    </div>
  );
};
