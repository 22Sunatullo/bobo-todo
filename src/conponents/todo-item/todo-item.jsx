import React from "react";

import './todo-item.css';

export const TodoItem = ({todos,handleDeleteTodo}) => {


  return (
    <div>
    {todos.map((todo) => (
      <div className="item" key={todo.id}>
        <nav>{todo.text}</nav>
        <span onClick={() => handleDeleteTodo(todo.id)}> 
          <svg
          width="28"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="38" height="38" rx="10" fill="#999999" />
          <path
            d="M28.7969 10.9844H9.20312"
            stroke="#222222"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.3282 16.3281V23.4531"
            stroke="#222222"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.6719 16.3281V23.4531"
            stroke="#222222"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M27.0156 10.9844V27.9063C27.0156 28.1425 26.9218 28.369 26.7547 28.536C26.5877 28.703 26.3612 28.7969 26.125 28.7969H11.875C11.6388 28.7969 11.4122 28.703 11.2452 28.536C11.0782 28.369 10.9843 28.1425 10.9843 27.9063V10.9844"
            stroke="#222222"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M23.4531 10.9844V9.20312C23.4531 8.73071 23.2655 8.27764 22.9314 7.94359C22.5974 7.60954 22.1443 7.42187 21.6719 7.42187H16.3281C15.8557 7.42187 15.4026 7.60954 15.0686 7.94359C14.7345 8.27764 14.5469 8.73071 14.5469 9.20312V10.9844"
            stroke="#222222"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          </svg>
        </span>
     </div>
    ))}
  </div>
     
  );
};
