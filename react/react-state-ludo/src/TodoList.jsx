import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "Sample task", id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        // console.log("we have to add new task in todo");
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
        });
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
        //filter method sends a copy of object w/o target ID && passed onto setTodo
        //also make react rerender
    };

    let markAllAsDone = () => {
        let styles = { textDecoration: "line-through" };

        setTodos((prevTodos) =>
            prevTodos.map((prevTodo) => {
                return {
                    ...prevTodo,
                    isDone: (prevTodo.isDone = true),
                };
            })
        );
    };

    let markAsDone = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((prevTodo) => {
                if (prevTodo.id == id) {
                    return {
                        ...prevTodo,
                        isDone: (prevTodo.isDone = true),
                    };
                } else {
                    return prevTodo;
                }
            })
        );
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                placeholder="Add a Task"
                value={newTodo}
                onChange={updateTodoValue}
            />
            <br />
            <button onClick={addNewTask}>Add Task</button>
            <hr />

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={todo.isDone ? { textDecorationLine: "line-through" } : {}}>
                            {todo.task}
                        </span>
                        &nbsp; &nbsp; &nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>delete</button>
                        <button onClick={() => markAsDone(todo.id)}>mark as done</button>
                    </li>
                ))}
            </ul>
            <button onClick={markAllAsDone}>Mark All As Done</button>
        </div>
    );
}
