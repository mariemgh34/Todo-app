import React from 'react'
import { updateTask } from '../redux/slices/todoSlice';
import { useDispatch } from 'react-redux';

const Task = ({task}) => {
    const dispatch = useDispatch();
  return (
    <div className="task-list">
        <h2>id:{task.id}</h2>
        <h2>Descrition:{task.description}</h2>
        <input type="checkbox" checked={task.isDone} onChange={() => {dispatch(updateTask(task.id))}} />
    
    
    </div>
  )
}

export default Task