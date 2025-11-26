import { createSlice, nanoid } from "@reduxjs/toolkit";
import { act } from "react";
//nanoid -> generates unique ids

const initialState = {
    todos:[{id: 1, text: "hello world"}]
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);

                

        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },

        updateTodo: (state, action)=>{
            const {id, updateTodo} = action.payload;
            state.todos = state.todos.map((todo)=>(todo.id === id ? updateTodo: todo));
        },


    }
})

export const {addTodo, updateTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer;