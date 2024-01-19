import { useDispatch, useSelector } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";

export default function Todo() {
    const todos = useSelector((state) => state.todos);
    console.log(todos);

    const dispatch = useDispatch();

    let clickHandler = (id) => {
        console.log("delete", id);
        dispatch(deleteTodo(id));
    };
    let markDone = (id) => {
        console.log("taskCompleted", id);
        dispatch(markAsDone(id));
    };

    let styles = { color: "red" };
    return (
        <>
            <h1>Todo List</h1>
            <AddForm />
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} style={todo.isDone ? { color:"red" } : {}}>
                        {todo.task}
                        <button onClick={() => clickHandler(todo.id)}>Delete</button>
                        <button onClick={() => markDone(todo.id)}>
                            Task Completed
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}
