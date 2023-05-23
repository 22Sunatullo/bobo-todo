import React, { useState } from "react";
import { Inputr } from "../input/inputr";
import { Header } from "../Header/Header";
import "./App.css";
import { TodoItem } from "../todo-item/todo-item";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      return;
    }
    setTodos([...todos, { id: Date.now(), text: inputValue }]);
    setInputValue("");
  };
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="app">
      <div className="">
        <Header />
        <Inputr
          handleInputChange={handleInputChange}
          inputValue={inputValue}
          handleFormSubmit={handleFormSubmit}
        />
        <TodoItem todos = {todos} handleDeleteTodo = {handleDeleteTodo}/>
       
      </div>
    </div>
  );
}
export default App;
