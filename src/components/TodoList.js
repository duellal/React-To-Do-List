import React from 'react'

const TodoList = props => {
   return (
      <div>
         <p
            style={props.completed === true ? { textDecoration: 'line-through' } : null}
            onClick={props.clear}
         >
            {props.task}
         </p>
      </div>
   )
}

export default TodoList