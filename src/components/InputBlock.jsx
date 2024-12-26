import React, { useState } from 'react'
import classes from './InputBlock.module.css'

const InputBlock = ({props, create}) => {
    let [text, setText] = useState('')

    const createPost = (e) => {
        e.preventDefault()
        create(text)
        setText('');
    }

  return (
    <form className={classes.inputForm}>
        <input value={text} type="text" placeholder="Задача" onChange={e => (
            setText(e.target.value)
        )}/>
        <button onClick={createPost}>Создать задачу</button>
    </form>
  )
}

export default InputBlock