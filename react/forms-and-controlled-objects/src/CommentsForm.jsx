import { useState } from "react";

export default function CommentsForm() {
    let [formData, setFormData] = useState({
        user: "",
        rating: 5,
        comment: "",
    });

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value };
        });
    };

    let handleSubmit = (event) => {
        console.log(formData);
        event.preventDefault();
    };

    return (
        <div>
            <h4>What do you think??</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="user"></label>
                <input
                    type="text"
                    id="user"
                    placeholder="Username"
                    value={formData.user}
                    name="user"
                    onChange={handleInputChange}
                />
                <label htmlFor="rating"></label>
                <input
                    type="number"
                    id="rating"
                    placeholder="Rating"
                    min={1}
                    max={5}
                    value={formData.rating}
                    onChange={handleInputChange}
                />
                <br />
                <label htmlFor="comment"></label>
                <textarea
                    name="comment"
                    id="comment"
                    cols="30"
                    rows="10"
                    placeholder=" Write a comment!!"
                    value={formData.comment}
                    onChange={handleInputChange}
                ></textarea>
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
}
