import React from 'react'

const TodoForm = props => {
   const { todoArray, setTodoArray, add, change, setNewTodo } = props

   return (
      <div>
         <input
            type='text'
            placeholder='Write Todo'
            onChange={task => {
               setNewTodo(add(task.target.value))
            }
            }
         >
         </input>
         {/* want to make the Add Todo button, add the inputted text in the input bar */}
         <button onClick={add}>
            Add Todo
         </button>
         <button>
            Clear Completed
         </button>
      </div>
   )
}

export default TodoForm