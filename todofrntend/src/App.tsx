import { ChangeEvent, useState } from 'react';

import {ITask} from './Interface'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  
  const [task,setTask]=useState("")
  const [todoTask,setTodoTask]=useState<ITask[]>([])
  const changing=(event:ChangeEvent<HTMLInputElement>):void =>{
     setTask(event.target.value);

  }

  const addTask=():void=>{
      const newTask={taskName:task}
      setTodoTask([...todoTask,newTask]);
      setTask("")
      console.log(todoTask)
  }


  return (
    <div className="App">
      <div className="inputContainer">
      
       <input
        type="text"
        className="todoInput"
        placeholder="Add a task here" 
        value={task}
        onChange={changing}
        />
     
        <div className="btnDiv">
       <button className="btn btn-primary btn-lg" onClick={addTask}> Add Todo</button>
       </div>
       <div className="list">
        {todoTask.map((e)=>{
          return (<p className="ListingTodo">{e.taskName}</p>)
        })}
        </div>

      </div>
    </div>
  );
}

export default App;
