import { ChangeEvent, useState } from 'react';

import { ITask } from './Interface';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
function App() {
  const url = 'http://localhost:3001/';
  const [task, setTask] = useState('');
  const [todoTask, setTodoTask] = useState<ITask[]>([]);
  const [completedTodoTask, setCompletedTodoTask] = useState<ITask[]>([]);
  const [isActive, setIsActive] = useState(true);
  const changing = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);
  };

  const addTask = (): void => {
    const newTask = { taskName: task };
    setTodoTask([...todoTask, newTask]);
    setTask('');
    const instance = axios.create({ baseURL: 'http://localhost:3001' });
    instance.post('/test', {
      newTask,
    });
  };
  const deleteItem = (ind: number) => {
    setTodoTask(todoTask.filter((obj, index) => index !== ind));
  };
  const completedTask = (ind: number): void => {
    const completedTasksNow = todoTask.filter((obj, index) => index === ind);
    const complete = completedTasksNow[0].taskName;
    const newcompletedTask = { taskName: complete };
    setCompletedTodoTask([...completedTodoTask, newcompletedTask]);
    setTodoTask(todoTask.filter((obj, index) => index !== ind));
  };

  return (
    <div className='App'>
      <div className='inputContainer'>
        {/* <form action='/myform' method='get'> */}
        <input
          type='text'
          className='todoInput'
          placeholder='Add a task here'
          name='Todo'
          required
          value={task}
          onChange={changing}
        />
        {/* // </form> */}

        <div className='btnDiv'>
          <button className='btn btn-primary btn-lg' onClick={addTask}>
            {' '}
            Add Todo
          </button>
        </div>
        <div className='list'>
          {todoTask.map((e, ind) => {
            return (
              <>
                <ul className='activeListingTodo'>
                  {e.taskName}

                  <div className='actiontool'>
                    <i
                      className='faTask fa-solid fa-xmark fa-lg'
                      onClick={() => deleteItem(ind)}
                    ></i>

                    <i
                      className='faClose fa-solid fa-check fa-lg'
                      onClick={() => completedTask(ind)}
                    ></i>
                  </div>
                </ul>
              </>
            );
          })}
          <div>
            <h2 className='head'>Completed</h2>
          </div>
          {completedTodoTask.map((e, ind) => {
            return (
              <>
                <ul className={'nothingList'}>{e.taskName}</ul>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
