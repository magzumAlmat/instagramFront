'use client'
import { useState } from "react";

export default function Test(){
    const name = "Aldy"
    const [counter, setCounter] = useState(10);
    const plusFunc = () =>{
        setCounter(counter + 1)
    }
    const minusFunc = () =>{
        setCounter(counter - 1)
    }
    return (<div className="container">
        <h1>My test Component </h1>
        <p>My test Parag ...</p>
        <a>test link</a>

        <p>Counter: {counter}</p>

        <button onClick={plusFunc}>Increase</button>
        <button onClick={minusFunc}>Decrease</button>
    </div>)
}