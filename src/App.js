import React, { useEffect, useState } from "react";
import "./App.css";
import { Filtro } from "./components/Filtro";
import { Formulario } from "./components/Formulario";
import { getAll } from "./services/controls";

const App = () => {
  const [guiaTel, setGuiaTel] = useState([]);

  useEffect(() => {
    console.log("Effect!");
    getAll().then((initialPhoneGuide) => {
      console.log("promesa cumplida con éxito");
      setGuiaTel(initialPhoneGuide);
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
