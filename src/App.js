import React, { useState } from 'react';
import TodoText from '../src/components/TodoText';
import TodoForm from "../src/components/TodoForm";
import TodoList from '../src/components/TodoList';

const mockArray = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

const App = () => {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  const [todoArray, setTodoArray] = useState(mockArray)
  const [newTodo, setNewTodo] = useState('')

  // // Below is to create an array of objects without having a mock array to start it 

  //   const [todoArray, setTodoArray] = useState([{ task: String, id: Number, completed: Boolean }])

  console.log(todoArray)

  const addTask = event => {
    // event.preventDefault();

    const newTodo = { task: event, id: Date.now(), completed: false }

    setTodoArray(
      //I don't think a map is needed here to add an element to the array of objects
      // todoArray.map(elem => {
      // if statement to prevent the same task multiple times
      // if (elem.task != input) {
      { ...todoArray, newTodo }
    )
    // }
    // }))
  }

  const changeTask = event => {
    setTodoArray({ [event.target.name]: event.target.value })
  }

  // For above code: need to go into the TodoForm.js and make the changes apply to add a new entry to the list of tasks


  const completedTask = id => {
    setTodoArray(todoArray.map(elem => {
      if (elem.id === id) {
        elem.completed = !elem.completed;
        return elem
      }
      return elem
    }))
  }

  const clearCompleted = () => {
    setTodoArray(todoArray.filter(task => {
      return !task.completed
    })
    )
  }

  return (
    <div>
      <h2>Welcome to your Todo App!</h2>

      <div>
        <TodoText todoArray={todoArray} complete={completedTask} setTodoArray={setTodoArray} clear={clearCompleted} />
      </div>

      <div>
        <TodoForm setTodoArray={setTodoArray} todoArray={todoArray} add={addTask} change={changeTask} setNewTodo={setNewTodo} />
      </div>
    </div>
  );
}

export default App;
