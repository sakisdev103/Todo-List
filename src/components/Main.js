import React, { useState } from 'react';
import { useContext } from 'react';
import { globalContext } from '../context/GlobalState';
import TodoList from './TodoList';

function Main() {
    const [text, setText] = useState('');
    const [error, setError] = useState(false);
    const [displayError, setDisplayError] = useState('');
    const {addTodos} = useContext(globalContext);
    const form = document.querySelector("#form");
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!text){
            setError(true);
            setDisplayError('Please write a task.');
            setTimeout(()=>{ setDisplayError('')},1000)
            
        }else{
            const newTodo = {
                id: Math.floor(Math.random() * 10000),
                text
            }
            addTodos(newTodo);
            setDisplayError('Successfully added.');
            setTimeout(()=>{ setDisplayError('')},1000);
            setTimeout(()=>{ form.reset()},2000);
        }
    }
  return (
    <main className='main'>
        <form onSubmit={handleSubmit} id='form'>
            {error ? <p className='error'>{displayError}</p> : <p className='success'>{displayError}</p>}
            
            <input type="text" onChange={(e)=>setText(e.target.value)}/>
            <button type="submit">Add</button>
        </form>
        <div className="">
            <TodoList/>
        </div>
    </main>
  )
}

export default Main