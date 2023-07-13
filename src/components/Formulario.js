import React, { useEffect, useState } from "react";
import { Listado } from "./Listado";

export const Formulario = ({ guiaTel }) => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newTel, setNewTel] = useState("");

  useEffect(() => {
    console.log("effect guiaTel");
    setPersons(guiaTel);
  }, [guiaTel]);

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
  console.log("peersons en form", persons);
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
