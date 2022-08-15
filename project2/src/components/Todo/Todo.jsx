import React from "react";
import "./Todo.scss";

const Todo = ({id, item, handleDeleteTodo, handleChangeStatus, handleChangeActive, handleChange, handleChangeByEnter}) => {
  return (
    <div className={`todo ${item.check ? 'todoActiveStatus': ''} flex justify-around `}>
      <div onClick={() => handleChangeStatus(id)} className="todo_icon">
        <i className="fa-solid fa-check"></i>
      </div>
      <div className="todo_title">
        {
          !item.changeValue ? (<p>{item.title}</p>)
          : (<input 
              type='text'
              value={item.title}
              onChange = {(e) => handleChange(e, id)}
              onKeyUp = {(e) => handleChangeByEnter(e,id)}
             />)
        }
      </div>
      <div onClick={() => handleChangeActive(id)} className="todo_change">
        {
          !item.changeValue ? 
          (<i className="fa-solid fa-pen"></i>) 
          : (<i className="fa-solid fa-check"></i>)
        }
      </div>
      <div onClick={() => handleDeleteTodo(id)} className="todo_delete">
        <i class="fa-solid fa-minus"></i>
      </div>
    </div>
  );
};

export default Todo;
