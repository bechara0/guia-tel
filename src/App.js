import React from "react";
import "./App.css";
import { Filtro } from "./components/Filtro";
import { Formulario } from "./components/Formulario";

const App = () => {
  let guiaTel = [
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ];

  return (
    <div>
      <h2>Phonebook</h2>
      <Filtro guiaTel={guiaTel} />
      <Formulario guiaTel={guiaTel} />
      
      
    </div>
  );
};

export default App;
