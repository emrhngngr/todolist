import './App.css';
import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn JavaScript", completed: true },
    { id: 3, title: "Have a life!", completed: false }
  ]);
  const [filter, setFilter] = useState('all'); 

  const addTodo = (text) => {
    setTodos([{ id: Date.now(), title: text, completed: false }, ...todos]);
  };

  const toggleCompletion = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteItem = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const makeCompleted = () => {
    setTodos(todos.map(todo => ({ ...todo, completed: true })));
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <section className="todoapp bg-gray-100 min-h-screen flex items-center justify-center p-4">
    <div className="todoapp w-full max-w-xl bg-white rounded-lg shadow-lg p-4">
      <Header addTodo={addTodo} />
      <Main todos={filteredTodos} toggleCompletion={toggleCompletion} deleteItem={deleteItem} />
      <Footer todos={todos} setFilter={setFilter} clearCompleted={clearCompleted} />
      <button
        onClick={makeCompleted}
        className="w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-700"
      >
        Mark All as Completed
      </button>
    </div>
  </section>
  );
}

export default App;
