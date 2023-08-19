import { useState } from "react";
import { NewToDoForm } from "./NewToDoForm";
import { ToDoList } from "./ToDoList";
import "./styles.css"

export default function App() {
  const [todos, setToDos] = useState([]);

  function addItem(title) {
    setToDos(currentToDos => {
      return [
        ...currentToDos, 
        { id: crypto.randomUUID, title, completed: false }
      ];
    });
  }

  function toggleToDo(id, completed) {
    setToDos(currentToDos => {
      return currentToDos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed}
        } 
        return todo;
      })
    })
  }

  return (
    <>
      <NewToDoForm addItem={addItem} />
      <h1>To Do List:</h1>
      <ToDoList todos={todos} toggleToDo={toggleToDo}/>
    </>
  )
}

