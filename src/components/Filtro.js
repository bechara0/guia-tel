import React, { useState } from "react";
import { ListadoFiltro } from "./ListadoFiltro";

export const Filtro = ({ guiaTel }) => {
  const [filteredPersons, setFilteredPersons] = useState([]);
  const [filterName, setFilterName] = useState("");
  const handleFilterChange = (e) => {
    setFilterName(e.target.value);
  };

  const filterOn = (e) => {
    e.preventDefault();
    const filterArray = guiaTel.filter((item) =>
      item.name.toLowerCase().startsWith(filterName.toLowerCase())
    );
    if (filterName.length > 0 && filterArray.length > 0) {
      setFilteredPersons(filterArray);
      setFilterName("");
    } else {
      alert(`"${filterName}" no arroja resultado de búsqueda.`);
    }
  };

  return (
    <div>
      <form onSubmit={filterOn}>
        <label>Ingrese término de búsqueda:</label>
        <input type="text" value={filterName} onChange={handleFilterChange} />
        <button type="submit">Filtrar</button>
      </form>
      <ListadoFiltro filteredPersons={filteredPersons} />
    </div>
  );
};
