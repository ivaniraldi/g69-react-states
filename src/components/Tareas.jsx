/* eslint-disable no-unused-vars */
import { useState } from "react";
import tareas from "../data/tareas.json";

const Tareas = () => {
  const [nombreTarea, setNombreTarea] = useState("");
  const [listaTareas, setListaTareas] = useState(tareas);
   
  // Función al enviar el formulario
  // CRUD PARTE CREATE
  const enviarFormulario = (e) => {
    e.preventDefault();

    setListaTareas([
      ...listaTareas,
      { nombre: nombreTarea, completada: false },
    ]);

    setNombreTarea("");
  };

  //Función al escribir sobre el input del formulario

  const capturaInput = (e) => {
    setNombreTarea(e.target.value);
  };

  //Funcion que completa la tarea
  // CRUD PARTE UPDATE
  const completarTarea = (tarea) => {
    let copiaTareas = [...listaTareas];
    const index = copiaTareas.findIndex((el) => el.nombre === tarea.nombre);
    // Buscamos la tarea a completar en la lista
    copiaTareas[index].completada = !copiaTareas[index].completada;
    setListaTareas(copiaTareas);
  };
  //funcion para eliminar una tarea
    // CRUD PARTE DELETE
  const eliminarTarea = (tarea) => {
    const listaFiltrada = listaTareas.filter(el => el.nombre !== tarea.nombre)
    setListaTareas(listaFiltrada)
  }

  return (
    <>
      <div>
        <form onSubmit={enviarFormulario}>
          <input
            name="nombreTarea"
            value={nombreTarea}
            onChange={capturaInput}
          />
          <button type="submit"> Agregar Tarea </button>
        </form>
        <ul>
          {
            // CRUD PARTE READ
          listaTareas.map((tarea, i) => (
            <li
              style={tarea.completada ? { textDecoration: "line-through" } : {}}
              key={i}
            >
              {tarea.nombre} Completada: {tarea.completada ? "Si" : "No"}
              <button onClick={()=>completarTarea(tarea)}>Completar</button> <button onClick={()=>eliminarTarea(tarea)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Tareas;
