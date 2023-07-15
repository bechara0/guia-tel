import React, { useEffect, useState } from "react";
import "./App.css";
import { Filtro } from "./components/Filtro";
import { Formulario } from "./components/Formulario";
import axios from "axios";

const App = () => {
  const [guiaTel, setGuiaTel] = useState([]);

  useEffect(() => {
    console.log("Effect!");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promesa cumplida con éxito");
      setGuiaTel(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filtro guiaTel={guiaTel} />
      <Formulario guiaTel={guiaTel} />
    </div>
  );
};

export default App;
