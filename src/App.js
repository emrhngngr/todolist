import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { useDispatch } from "react-redux";

function App() {
  const todos = useSelector((state) => state.todo.items);
  const [filter, setFilter] = useState("all");
  const dispatch = useDispatch();

  const toggleCompletion = (id) => {
    dispatch({
      type: "todo/toggleTodo",
      payload: id
    });
  };

  const deleteItem = (id) => {
    dispatch({
      type: "todo/deleteTodo",
      payload: id
    });
  };

  const clearCompleted = () => {
    dispatch({
      type: "todo/clearCompleted"
    });
  };

  const makeCompleted = () => {
    dispatch({
      type: "todo/markAllCompleted"
    });
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <section className="todoapp bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="todoapp w-full max-w-xl bg-white rounded-lg shadow-lg p-4">
        <Header />
        <Main
          todos={filteredTodos}
          toggleCompletion={toggleCompletion}
          deleteItem={deleteItem}
        />
        <Footer
          todos={todos}
          setFilter={setFilter}
          clearCompleted={clearCompleted}
        />
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