import React from 'react'
import { FaTimes } from 'react-icons/fa' 
const Task = ({task}) => {
  return (
    <div className='task'>
        <h4>{task.text} <FaTimes style={{color:'red', cursor:'pointer'}} /></h4>
        <p>{task.day}</p>
        
    </div>

  )
}

export default Task