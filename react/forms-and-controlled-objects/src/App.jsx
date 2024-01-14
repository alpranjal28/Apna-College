import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./Form";
import CommentsForm from "./CommentsForm";
import Counter from "./Counter";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Counter></Counter>
            <Form></Form>
            <CommentsForm></CommentsForm>
        </>
    );
}

export default App;
