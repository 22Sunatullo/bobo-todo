import React, { useState } from "react";

import "./Inputr.css";

export const Inputr = ({ handleFormSubmit, inputValue, handleInputChange }) => {
 
  return (
    <form className="inputr" onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button>Add</button>

      <div>
        <svg
          width="400"
          height="5"
          viewBox="0 0 968 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            y1="-0.5"
            x2="966.218"
            y2="-0.5"
            transform="matrix(0.999996 -0.00264655 0.00288337 0.999996 1 4.5)"
            stroke="white"
          />
        </svg>
      </div>
    </form>
  );
};
