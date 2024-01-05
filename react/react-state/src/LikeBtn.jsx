import { useState } from "react";

export default function LikeBtn() {
    let [isLiked, setIsLiked] = useState(false);//initialization 
    function toggleLike() {
        setIsLiked(!isLiked);
        if (isLiked == !true) {
            console.log("liked");
        } else {
            console.log("unliked");
        }
    }

    let styles = { color: "red" };

    // let clicked = () => {
    //     console.log("clicked");
    // };

    return (
        <div>
            <p onClick={toggleLike}>
                {isLiked ? (
                    <i className="fa-solid fa-heart" style={styles}></i>
                ) : (
                    <i className="fa-regular fa-heart"></i>
                )}
            </p>
            <p>{isLiked.toString()}</p>
        </div>
    );
}
