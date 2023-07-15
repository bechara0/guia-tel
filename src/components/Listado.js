import { deletePhone } from "../services/controls";

export const Listado = ({ persons }) => {
  const deleteByGuide = (id) => {
    const secure = window.confirm("Seguro desea eliminar el registro?");
    secure
      ? deletePhone(id).then(alert("entrada eliminada"))
      : alert("eliminación cancelada");
  };
  // console.log("persons", persons);
  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <div key={person.name}>
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
  );
};
