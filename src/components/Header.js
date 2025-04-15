import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToDo } from '../redux/todo/todoSlice';

export const Header = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      dispatch(addToDo({ title: inputText }));
      setInputText("");
    }
  };
  
  return (
    <header className="header mb-4">
      <h1 className="text-4xl text-[#7AA2E3] font-bold text-center mb-4">todos</h1>
      <form onSubmit={handleSubmit} className="flex">
        <input
          className="new-todo w-full p-2 border border-gray-300 rounded"
          placeholder="What to-do?"
          autoFocus
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </form>
    </header>
  );
};