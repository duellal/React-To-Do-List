import React from 'react'

const TodoForm = props => {
   const { todoArray, setTodoArray } = props

   return (
      <div>
         <input
            type='text'
            placeholder='Write Todo'
         >
         </input>
         <button onClick={(input) => setTodoArray(...todoArray, { task: input, id: Date.now(), completed: false })}>
            Add Todo
         </button>
         <button>
            Clear Completed
         </button>
      </div>
   )
}

export default TodoForm