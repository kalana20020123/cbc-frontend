import { useState } from "react"; // Import useState hook from React
import "./testing.css";



export default function Testing() {

    const [count, setCount] = useState(0); // Initialize count state // with useState hook
    const [name, setName] = useState("Student"); // Initialize name state

    function increment() {
        setCount(count + 1); // Increment count by 1
    }
    function decrement() {
        setCount(count - 1); // Decrement count by 1
    }
    function changeName(newName) {
        setName(newName); // Change name to the new value
    }


    return(
        <div class="background">
            <h1>{name}</h1>
            <button className="val" onClick={decrement}>-</button>
            <span>{count}</span>
            <button className="val" onClick={increment}>+</button>

            <div className="buttonPanel">
                <button onClick={()=>changeName("Students")}>Students</button>
                <button onClick={()=>changeName("Teacher")}>Teacher</button>
                <button onClick={()=>changeName("Admin")}>Admin</button>
            </div>
        
        </div>
    )
}