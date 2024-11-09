import { createSlice, nanoid } from '@reduxjs/toolkit';

// const intialState = {
//     todos: [{ id: 1, text: 'Hello world'  }]
// }

function sayHello(){
    console.log(" Hello World !");
    
}
export const todoSlice = createSlice({
    name: 'todo',
    initialState: { todos: [{ id: 1, text: 'Hello world'  }] },
    reducers: {
        addTodo : sayHello, // (state, action) => { const todo = { id: nanoid(), text: action.payLoad.text }, states.todos.push(todo)}
        
        removeTodo: (state, action)  => {
            state.todos = state.todos.filter((todo) => 
                todo.id !== action.payload
        )
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer