export const addTodo = (data) => {
    return {
        type: 'addtodo',
        payload: data
    }
}

export const deleteTodo = (data) => {
    return {
        type: 'deletetodo',
        payload: data
    }
}