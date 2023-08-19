import { useState } from "react";

export function NewToDoForm({ addItem }) {
  const [item, setItem] = useState("");
  
  function handleSubmit (e) {
    e.preventDefault();
    if (item == "") return;
    addItem(item);
    setItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          type="text"
          id="item"
          value={item}
          onChange={e => setItem(e.target.value)}
        />
      </div>
      <button className="btn">Submit</button>
    </form>
  );
}