import React from 'react';

export const Main = ({ todos, toggleCompletion, deleteItem }) => {
  return (
    <section className="main">
      <input className="toggle-all hidden" type="checkbox" />
      <label htmlFor="toggle-all" className="hidden">Mark all as complete</label>

      <ul className="todo-list space-y-2">
        {todos.map((item) => (
          <li
            key={item.id}
            className={`flex items-center justify-between p-2 border rounded ${
              item.completed ? 'bg-green-100' : 'bg-white'
            }`}
          >
            <div className="view flex items-center">
              <input
                className="toggle hidden"
                type="checkbox"
                onChange={() => toggleCompletion(item.id)}
                checked={item.completed}
                id={`checkbox-${item.id}`}
              />
              <label
                htmlFor={`checkbox-${item.id}`}
                className={`custom-checkbox mr-2 ${item.completed ? 'checked' : ''}`}
              ></label>
              <label className={item.completed ? 'line-through text-gray-500' : ''}>{item.title}</label>
            </div>
            <button className="destroy bg-red-500 text-white p-1 rounded hover:bg-red-700 w-10" onClick={() => deleteItem(item.id)}>X</button>
          </li>
        ))}
      </ul>
    </section>
  );
};
