import { useState } from 'react';
import './styles/App.css';
import InputBlock from './components/InputBlock';
import TasksComponent from './components/TasksComponent';

function App() {
  if(JSON.parse(localStorage.getItem('data')) == null) localStorage.setItem('data', JSON.stringify([]))
  let data = JSON.parse(localStorage.getItem('data'))
  let [tasks, setTasks] = useState(data)
  localStorage.setItem('data', JSON.stringify(tasks))
  
  const createTask = (content = "") => {
    let temp = {id: tasks.length+1, key: Date.now(), enabled: false, text: content}
    setTasks([...tasks, temp])
    localStorage.setItem('data', JSON.stringify(tasks))
  }

  const checkTask = (key) => {
    setTasks(tasks.map(task => task.key === key ? {...task, enabled: !task.enabled} : task))
    localStorage.setItem('data', JSON.stringify(tasks))
  }

  const deleteTask = (key) => {
    setTasks(tasks.filter(task =>  task.key != key))
    localStorage.setItem('data', JSON.stringify(tasks))
  }

  return (
    <div>
      <InputBlock create={createTask} className="inputForm"/>
      <TasksComponent deleteFunc={deleteTask} checkFunc={checkTask} tasks={tasks}/>
    </div>
  );
}

export default App;
