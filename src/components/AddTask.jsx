
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/slices/todoSlice';
import { useState } from 'react';

const Addtask = () => {
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();
  return (
    <div ><input type="text" placeholder="Add a new task" onChange={(event) => setDescription(event.target.value)} />
   <button onClick={() => dispatch(addTask(description))}>Add</button>
    </div>
  )
}

export default Addtask