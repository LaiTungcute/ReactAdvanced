import React from 'react'
import './AddTodo.scss'

const AddTodo = ({todo, setTodo, handleAddTodo}) => {
  return (
    <div className='AddTodo flex flex-col items-center'>
        <h1>todos</h1>
        <div className="AddTodo_input">
            <input 
                type="text" 
                value={todo.title}
                placeholder='What do you need to do?'
                onChange={(e) => {
                    setTodo(prev => ({
                        ...prev,
                        title: e.target.value
                    }))
                }}
                onKeyUp = {e => handleAddTodo(e)}
            />
        </div>
    </div>
  )
}

export default AddTodo