import React from 'react'

const TodoList = props => {
   const { completed, strikeThrough } = props

   return (
      <div>
         <p
            style={completed === true ? { textDecoration: 'line-through' } : null}
            onClick={() => {
            }}
         >
            {props.task}
         </p>
      </div>
   )
}

export default TodoList