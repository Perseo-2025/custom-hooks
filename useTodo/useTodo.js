import { useReducer, useEffect } from "react";
import { useReducerTodo } from "./useReducerTodo";

const initialValue = [
    /* {
        id: new Date().getTime(),
        description: 'Piedra del alma',
        done: false
    }, */
]

const init = () => JSON.parse(localStorage.getItem('todos')) || [] // Si no hay nada en el localStorage, se inicializa con un array vacio


export const useTodo = () => {

    const [todos, dispatch] = useReducer(useReducerTodo, initialValue, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos)); // Guardar en el localStorage
        
    }, [todos])

    const onNewTodo = (todo) => {
        const action = {
            type : '[TODO] Add Todo',
            payload : todo
        }

        dispatch(action); //funcion para mandar la accion al reducer
    }



    const handleDeleteTodo = (id) => {
        console.log({id});
        
        const action = {
            type: '[TODO] Remove Todo',
            payload: id
        }

        dispatch(action); //funcion para mandar la accion al reducer
    }


    const handleToogleTodo = (id) => {
        console.log({id});
        
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }


    return {
        todos,
        onNewTodo,
        handleDeleteTodo,
        handleToogleTodo,
    }

}