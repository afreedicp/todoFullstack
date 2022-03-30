import { ChangeEvent, useState } from 'react';

import {ITask} from './Interface'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {
  
  const [task,setTask]=useState("")
  const [todoTask,setTodoTask]=useState<ITask[]>([])
   const [completedTodoTask,setCompletedTodoTask]=useState<ITask[]>([])
  const [isActive,setIsActive]=useState(true)
  const changing=(event:ChangeEvent<HTMLInputElement>):void =>{
     setTask(event.target.value);

  }

  const addTask=():void=>{
      setIsActive(true)
      const newTask={taskName:task}
      setTodoTask([...todoTask,newTask]);
      setTask("")
      console.log(todoTask)
  }
   const deleteItem = (ind:number) => {
    setTodoTask(todoTask.filter((obj, index) => index !== ind));
  };
  const completedTask=(ind:number)=>{
    setCompletedTodoTask(todoTask.filter((obj, index) =>index===ind ))
    const newTask={taskName:task}
      setCompletedTodoTask([...completedTodoTask,newTask]);
    
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
        {todoTask.map((e,ind)=>{
          return (<>
          <ul className={"activeListingTodo"}>{e.taskName}


          <i className="faTick fa-solid fa-xmark"  onClick={() => deleteItem(ind)}></i>

          <i className="faclose fa-solid fa-check" onClick={()=>completedTask(ind)}></i>
          </ul>
          </>)
          }
        )}
        {completedTodoTask.map((e,ind)=>{
          return (<>
          <ul className={"nothingList"}>{e.taskName}

          </ul>
          </>)
        })}
        </div>

      </div>
    </div>
  );
}

export default App;
