import React from "react";

export const ListadoFiltro = ({ filteredPersons }) => {
  return (
    <div>
      {filteredPersons.length > 0 ? <h2>Resultado Filtrado:</h2> : ""}
      <ul>
        {filteredPersons.map((filtered) => (
          <li key={filtered.name}>
            {filtered.name} : {filtered.number}
          </li>
        ))}
      </ul>
    </div>
  );
};
