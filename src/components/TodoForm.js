import React from 'react'

const TodoForm = props => {
   const { todoArray, setTodoArray, add, clear } = props

   return (
      <div>
         <input
            type='text'
            placeholder='Write Todo'
         >
         </input>
         <button onClick={input => { setTodoArray(add) }}>
            Add Todo
         </button>
         <button>
            Clear Completed
         </button>
      </div>
   )
}

export default TodoForm