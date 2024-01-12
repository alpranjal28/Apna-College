import { useState } from "react";

function Form() {
    // let [fullName, setFullName] = useState("");
    // let [username, setUsername] = useState("");

    // let handleNameChange = (event) => {
    //     // console.log(event.target.value);
    //     setFullName(event.target.value);
    // };
    // let handleUsername = (event) => {
    //     // console.log(event.target.value);
    //     setUsername(event.target.value);
    // };

    let [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: "",
    });

    let handleInputChange = (event) => {
        // let fieldName = event.target.name;
        // let newValue = event.target.value;

        setFormData((currData) => {
            currData;
            return { ...currData, [event.target.name]: event.target.value };
        });
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        setFormData({
            fullName: "",
            username: "",
            password: "",
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Form</h1>
            <label htmlFor="fullName">Enter Name</label>
            <br />
            <input
                type="text"
                id="fullName"
                placeholder="Enter Your Name"
                value={formData.fullName}
                onChange={handleInputChange}
                name="fullName"
            />
            <br />
            <br />
            <label htmlFor="username">Enter Username</label>
            <br />
            <input
                type="text"
                id="username"
                placeholder="Enter Your Name"
                value={formData.username}
                onChange={handleInputChange}
                name="username"
            />
            <br />
            <br />
            <label htmlFor="password">Enter Password</label>
            <br />
            <input
                type="password"
                id="password"
                placeholder="Enter Your Name"
                value={formData.password}
                onChange={handleInputChange}
                name="password"
            />
            <br /> <br />
            <button>Submit</button>
        </form>
    );
}

export default Form;
