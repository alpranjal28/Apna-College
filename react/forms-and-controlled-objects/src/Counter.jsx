import { useEffect, useState } from "react";

export default function Counter() {
    let [countx, setCountx] = useState(0);
    let [county, setCounty] = useState(0);

    //useEffect takes two variables(1,2) , triggers when page renders
    //where 1 is function and 2 is a dependency
    useEffect(() => {
        console.log("this is a useEffect -", randNo());
    }, [countx]);
    //by dependency countx only triggers in case of countx

    let randNo = () => {
        return Math.floor(Math.random() * 256) + 1;
    };

    let incCountx = () => {
        setCountx((countx += 1));
    };
    let incCounty = () => {
        setCounty((county += 1));
    };

    return (
        <div>
            <h3>Counter</h3>
            <h4>{countx}</h4>
            <button onClick={incCountx}>Count with useEffect - {countx}</button>
            <h4>{county}</h4>
            <button onClick={incCounty}>Count - {county}</button>
        </div>
    );
}
