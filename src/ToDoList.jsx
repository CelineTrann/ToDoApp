import { ToDoItem } from "./ToDoItem";

export function ToDoList({ todos, toggleToDo, deleteToDo }) {
  return (
    <ul>
      {todos.length === 0 && "No To Dos"}
      {todos.map(todo => {
        return (
          <ToDoItem 
            {...todo}
            key={todo.id}
            toggleToDo={toggleToDo}
            deleteToDo={deleteToDo}
          />
        )
      })}
    </ul>
  );
}