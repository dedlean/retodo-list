import React from 'react'

const TaskBlock = (props) => {
  const check = () => {
    props.checkFunc(props.keyProp)
  }

  const deleteTask = () => {
    props.deleteFunc(props.keyProp)
  }

  return (
    <div className="task">
      <input checked={props.enabled} onChange={check} type="checkbox"/>
      <p>{props.id}. {props.content}</p>
      <button onClick={deleteTask}>Удалить</button>
    </div>
  )
}

export default TaskBlock
