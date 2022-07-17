import React from 'react'

const TodoText = props => {
   const { todoArray, complete, setTodoArray } = props

   return (
      <div id='taskList'
         // Style is going through the array of objects and if the key completed is true, then it will put a line through the text
         style={todoArray.map(task => {
            return task.completed === true ? { textDecoration: 'line-through' } : null
         }
         )
         }
         // Want to make the strikethough style happen when clicking on a task
         onClick={() => {

         }}
      >
         {
            todoArray.map(elem => {
               return elem.task;
            })
         }
      </div >
   )
}

export default TodoText