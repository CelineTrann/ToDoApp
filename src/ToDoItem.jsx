export function ToDoItem({ id, title, completed }) {
  return (
    <li>
      <label>
        <input 
          type="checkbox" 
          checked={completed}
        />
        {title}
        <button>Delete</button>
      </label>
    </li>
  );
}