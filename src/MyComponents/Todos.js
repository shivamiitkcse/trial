import React from 'react';
import {TodoItem} from './TodoItem'; // Adjusted the path to the same directory
// import props from 'prop-types';

const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className='text-center my-3'>To Do list</h3>
      
        
          {props.todos.length==0 ?"no todos to display":
          props.todos.map((todo) => {
            return <TodoItem todo={todo} key = {todo.sno} onDelete={props.onDelete} />
          })
        
        }
        
    </div>
  );
};

export default Todos;
