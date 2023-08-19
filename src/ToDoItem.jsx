export function ToDoItem({ id, title, completed, toggleToDo }) {
  return (
    <li>
      <label>
        <input 
          type="checkbox" 
          checked={completed}
          onChange={e => toggleToDo(id, e.target.checked)}
        />
        {title}
        <button>Delete</button>
      </label>
    </li>
  );
}