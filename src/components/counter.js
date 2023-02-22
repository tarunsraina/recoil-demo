import { useRecoilState } from "recoil";
import counterState from "../atoms/counterState";
import React from 'react';

export default function Counter() {
    let [count, setCount ] = useRecoilState(counterState);

    let incrementCounter = () =>{
        setCount(count + 1);
    }

    return (
        <div>
            <h3>This is a global state variable which can be modified from two different components</h3>
            <center>
                <h1>{ count } </h1>
            
            <h3>This is component 1</h3>
            <button className="btn btn-primary" onClick={()=>{incrementCounter()}}>Increment</button>

            </center>

            <br></br>
        </div>
    )
}