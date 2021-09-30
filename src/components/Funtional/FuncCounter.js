import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const FuncCounter = () => {
  // Hooks
  // -- state
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [displayTodos, setDisplayTodos] = useState([]);

  // -- refs
  let innitialLoad = useRef(true);

  // -- side effects
  useEffect(() => {
    if (innitialLoad.current) {
      console.log('One time');
      axios
        .get('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
          setTodos(response.data);
          innitialLoad.current = false;
        })
        .catch((err) => console.log(err));
    } else {
      console.log('Many times');
      setDisplayTodos(todos.slice(0, count));
    }
  }, [count]);

  // Custom functions
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h2>Functional counter: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <h3>Todos</h3>
      {displayTodos.map((todo) => (
        <ul key={todo.id}>
          <li>
            <strong>{todo.title}</strong>
          </li>
          <li>
            {todo.completed ? 'Task Is Compeleted' : 'Task Is Not Completed'}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default FuncCounter;
