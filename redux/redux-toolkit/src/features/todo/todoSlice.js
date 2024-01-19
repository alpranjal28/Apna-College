import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: "abc", task: "demo-task", isDone: false }],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        //state, action
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false,
            };

            state.todos.push(newTodo); //direct mutation
        },
        deleteTodo: (state, action) => {
            // action.payload
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            console.log(state.todos, "after deleting value from state.todos");
        },
        markAsDone: (state, action) => {
            //action.payload
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, isDone: true };
                } else {
                    return { ...todo };
                }
            });
            console.log(state.todos, "after passing value to state.todos");
        },
    },
});

export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;

export default todoSlice.reducer;
