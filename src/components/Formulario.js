import React, { useEffect, useState } from "react";

import { create, deletePhone } from "../services/controls";

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
      id: Date.now(),
    };
    if (persons.findIndex((person) => person.name === newName) === -1) {
      create(nameObject).then((returnedName) => {
        setPersons(persons.concat(nameObject));
        setNewName("");
        setNewTel("");
      });
    } else {
      alert(
        `${newName} ya existe en la guía telefónica, o bien no no ha ingresado nada`
      );
    }
  };
  const deleteByGuide = (id) => {
    const secure = window.confirm("Seguro desea eliminar el registro?");
    secure
      ? deletePhone(id).then(
          setPersons(persons.filter((person) => person.id !== id))
        )
      : alert("eliminación cancelada");
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
      <div>
        <h2>Numbers</h2>
        <ul>
          {persons.map((person) => (
            <div key={person.id}>
              <li>
                {person.name}: {person.number}
              </li>
              <button type="submit" onClick={() => deleteByGuide(person.id)}>
                Delete
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};
