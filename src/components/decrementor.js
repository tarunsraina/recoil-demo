import { useRecoilState } from "recoil";
import counterState from "../atoms/counterState";
import React from 'react';

export default function Decrementor() {
    let [count, setCount ] = useRecoilState(counterState);

    let decrementCounter = () =>{
        setCount(count - 1);
    }

    return (
        <div>
        <center>
            <h3>This is component 2</h3>
            <button className="btn btn-danger" onClick={()=>{decrementCounter()}}>Decrement</button>
        </center>
        </div>
    )
}