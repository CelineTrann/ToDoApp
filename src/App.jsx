import { useEffect, useState } from "react";
import { NewToDoForm } from "./NewToDoForm";
import { ToDoList } from "./ToDoList";
import "./styles.css"

export default function App() {
  const [todos, setToDos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return [];
    return JSON.parse(localValue)
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addItem(title) {
    setToDos(currentToDos => {
      return [
        ...currentToDos, 
        { id: crypto.randomUUID(), title, completed: false }
      ]
    })
  }

  function toggleToDo(id, completed) {
    setToDos(currentToDos => {
      return currentToDos.map(todo => {
        if (todo.id === id) {
          return {...todo, completed}
        } 
        return todo
      })
    })
  }

  function deleteToDo(id) {
    setToDos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <NewToDoForm addItem={addItem} />
      <h1 className="header">To Do List:</h1>
      <ToDoList todos={todos} toggleToDo={toggleToDo} deleteToDo={deleteToDo}/>
    </>
  )
}

