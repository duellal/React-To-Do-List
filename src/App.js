import React, { useState } from 'react';
import TodoText from '../src/components/Todo';
import TodoForm from "../src/components/TodoForm";
import TodoList from '../src/components/TodoList';

const App = () => {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  const [todoArray, setTodoArray] = useState([{ task: String, id: Number, completed: Boolean }])



  return (
    <div>
      <h2>Welcome to your Todo App!</h2>

      <div>
        <TodoList todoArray={todoArray} />
        <TodoText />
      </div>

      <div>
        <TodoForm setTodoArray={setTodoArray} todoArray={todoArray} />
      </div>
    </div>
  );
}

export default App;
