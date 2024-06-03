import React from 'react';

export const Footer = ({ todos, setFilter, clearCompleted }) => {
  const remaining = todos.filter(todo => !todo.completed).length;

  return (
    <footer className="footer mt-4">
      <span className="todo-count">
        <strong>{remaining}</strong> item{remaining !== 1 ? 's' : ''} left
      </span>

      <ul className="filters flex space-x-2 mt-4">
        <li>
          <button
            className="p-2 rounded bg-gray-200 hover:bg-gray-300"
            onClick={() => setFilter('all')}
          >
            All
          </button>
        </li>
        <li>
          <button
            className="p-2 rounded bg-gray-200 hover:bg-gray-300"
            onClick={() => setFilter('active')}
          >
            Active
          </button>
        </li>
        <li>
          <button
            className="p-2 rounded bg-gray-200 hover:bg-gray-300"
            onClick={() => setFilter('completed')}
          >
            Completed
          </button>
        </li>
      </ul>

      <button
        className="clear-completed mt-4 p-2 bg-red-500 text-white rounded hover:bg-red-700"
        onClick={clearCompleted}
      >
        Clear completed
      </button>
    </footer>
  );
};
