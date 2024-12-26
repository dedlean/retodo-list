import React from 'react'
import TaskBlock from './TaskBlock'

const TasksComponent = (props) => {
    let temp = props.tasks

  return (
    <div>
      {temp.map(task => {
        return <TaskBlock id={task.id} deleteFunc={props.deleteFunc} checkFunc={props.checkFunc} enabled={task.enabled} content={task.text} keyProp={task.key} key={task.key}/>
      })}
    </div>
  )
}

export default TasksComponent