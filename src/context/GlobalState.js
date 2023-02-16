import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";

const initialState = {
    todos: []
}

// Create context

export const globalContext = createContext(initialState);

//Provider component

export const GlobalProvider = ({ children }) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions

    function deleteTodos(id){
        dispatch({
            type: 'DELETE_TODO',
            payload: id
        });
    }

    function addTodos(transaction){
        dispatch({
            type: 'ADD_TODO',
            payload: transaction
        });
    }

    return(
        <globalContext.Provider value={{
            todos: state.todos,
            deleteTodos,
            addTodos
        }}>
            {children}
        </globalContext.Provider>    
        
    )
}