import { useState } from "react";
import { NewToDoForm } from "./NewToDoForm";
import { ToDoList } from "./ToDoList";
import "./styles.css"

export default function App() {
  const [todos, setToDos] = useState([]);

  function addItem(title) {
    setToDos(currentToDos => {z
      return [
        ...currentToDos, 
        { id: crypto.randomUUID, title: item, completed: false }
      ];
    });
  }

  return (
    <>
      <NewToDoForm addItem={addItem} />
      <h1>To Do List:</h1>
      <ToDoList />
    </>
  )
}

