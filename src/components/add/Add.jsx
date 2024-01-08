import React, { useState } from 'react';

const FuncNumbers = () => {
  const [numbers, setNumbers] = useState([]);
  const addNumber = () => {
    const newNum = Math.floor(Math.random() * 10) + 1;
    setNumbers([...numbers, newNum]);
  };
  return (
    <div>
      <button onClick={addNumber}>Add random number</button>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default FuncNumbers;