import { ChangeEvent, useEffect, useState } from 'react';

import { ApiTask, ITask } from './Interface';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
function App() {
  // const url = 'http://localhost:3001/';
  const [task, setTask] = useState('');
  const [todoTask, setTodoTask] = useState<ApiTask[]>([]);
  const [completedTodoTask, setCompletedTodoTask] = useState<ApiTask[]>([]);
  const instance = axios.create({ baseURL: 'http://localhost:3001' });
  const changing = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);
  };

  const addTask = (): void => {
    // const newTask = { taskName: task };
    // if (newTask.taskName === '') {
    //   return;
    // }
    // setTodoTask([...todoTask, newTask]);
    // setTask('');

    instance
      .post('/test', {
        task,
      })
      .then((res) => {
        setTodoTask([...todoTask, res.data]);
      });
  };

  const deleteItem = (ind: number) => {
    setTodoTask(todoTask.filter((obj, index) => index !== ind));
    instance.delete('/delete', {});
  };
  const completedTask = (ind: number): void => {
    instance
      .post('/complete', {
        ind,
      })
      .then((res) => {
        setCompletedTodoTask([...completedTodoTask, res.data]);
        setTodoTask(todoTask.filter((obj, index) => index !== ind));
      });
    // setCompletedTodoTask([...completedTodoTask, newcompletedTask]);
    //
  };
  useEffect(() => {
    let char = instance.get<ApiTask[]>('/getting').then((res) => {
      setTodoTask(res.data);
    });
    let completedTodo = instance
      .get<ApiTask[]>('/getting?inactive=true')
      .then((res) => {
        setCompletedTodoTask(res.data);
      });
  }, []);
  //
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
                  {e.task}

                  <div className='actiontool'>
                    {/* <i
                      className='faTask fa-solid fa-xmark fa-lg'
                      onClick={() => deleteItem(e.id)}
                    ></i> */}

                    <i
                      className='faClose fa-solid fa-check fa-lg'
                      onClick={() => completedTask(e.id)}
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
                <ul className={'nothingList'}>{e.task}</ul>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
