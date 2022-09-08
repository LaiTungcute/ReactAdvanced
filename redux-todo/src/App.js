import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import { useRef, useState } from 'react';
import { addTodo, deleteTodo } from './Redux/actions';

function App() {
  const selector = useSelector(state => state.todo);
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const handleClick = () => {
    dispatch(addTodo(value));
    setValue('');
    inputRef.current.focus();
  }

  const handleDelete = (data) => {
    dispatch(deleteTodo(data));
  }

  return (
    <div className="App">
      <input 
        ref={inputRef}
        type='text'
        placeholder='todo'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>

      {
        selector && (
          selector.map((item, index) => (
            <ul key={index}>
              <li>
                {item}
                <button onClick={() => handleDelete(index)}>Delete</button>
              </li>
            </ul>
          ))
        )
      }

    </div>
  );
}

export default App;
