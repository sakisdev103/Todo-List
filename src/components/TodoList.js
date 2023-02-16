import React from 'react';
import { useContext } from 'react';
import { globalContext } from '../context/GlobalState';

const TodoList = () => {
  const {todos , deleteTodos} = useContext(globalContext);
  
  return (
    <div>
        {
            todos.map((todo) =>{
                return(
                    <article key={todo.id} className='todos'>
                        <p>{todo.text}</p>
                        <button className='delete-btn' onClick={()=>deleteTodos(todo.id)}><i className='fa-solid fa-trash-can'></i></button>
                    </article>
                )
                
            })
        }
    </div>
  )
}

export default TodoList