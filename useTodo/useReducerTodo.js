// { type: [todo remove], payload: TODO }

export const useReducerTodo = (initialValue = [], action) => {
    
    
    switch (action.type)
    {
        case '[TODO] Add Todo':
            return [...initialValue, action.payload ]// Agregar un nuevo TODO al array de todos
        case '[TODO] Remove Todo':
            return initialValue.filter(todo => todo.id !== action.payload) // Eliminar un TODO del array de todos;
        case '[TODO] Toggle Todo':
            return initialValue.map(todo => {
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        done: !todo.done // Cambiar el estado del TODO
                    }
                }
                return todo; // Retornar el TODO sin cambios
            })    

            default:
                return initialValue;
    }


}