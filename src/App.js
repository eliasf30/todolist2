
import './App.css';

import { useRef } from 'react';
import { useState } from "react";
import { useEffect } from "react";
import { Todolist }  from './todolist.jsx';





function App() {


  const todotaskref = useRef();

  const [todos,settodos] = useState([])
    
  const add = () => {
    const task = todotaskref.current.value;
    if (task === "") return;

    settodos((prevtodos) => {
      return [...prevtodos,{ task }]
    })
    todotaskref.current.value = null;
  }
  const taskdelete = () => {
    settodos([])

  }

  return (
    <div className="App">
      
      <input className='input' ref={todotaskref} type="text" placeholder='nueva tarea'></input>
      <div className='buttondiv'>
      <button className='button' onClick={add}>add</button>
      <button className='button' onClick={taskdelete}>delete</button>
      </div>
      
      <Todolist todos={todos}/>

      
     
      
      
    </div>
  );

}


export default App;
