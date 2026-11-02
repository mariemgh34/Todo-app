
import { useSelector } from 'react-redux';
import Task from './Task';
import { useEffect, useState } from 'react';

const ListTask = () => {
    const [show,setShow] = useState("all");
  const todos = useSelector(state => state.todos);
  const [filteredTodos, setFilteredTodos] = useState(todos);
  useEffect(() => (
    show=="all" ? setFilteredTodos(todos) : show=="done" ? setFilteredTodos(todos.filter(el => el.isDone==true)) : setFilteredTodos(todos.filter(el => el.isDone==false))
  )
  , [show, todos]);

  return (<div>
    <div className="filters">
        <button onClick={() => setShow("all")}>All</button>
        <button onClick={() => setShow("done")}>done</button>
        <button onClick={() => setShow("not done")}>not done</button>
        </div>
          <div>
      {filteredTodos.map((el, index) => (
        <Task key={index} task={el} />
      ))}
    </div>
    </div>
    
  );
  
};

export default ListTask;