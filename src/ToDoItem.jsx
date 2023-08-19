export function ToDoItem({ id, completed, title, toggleToDo, deleteToDo }) {
  return (
    <li>
      <label>
        <input 
          type="checkbox" 
          checked={completed}
          onChange={e => toggleToDo(id, e.target.checked)}
        />
        {title}
      </label>
      <button onClick={() => deleteToDo(id)}>Delete</button>
    </li>
  );
}