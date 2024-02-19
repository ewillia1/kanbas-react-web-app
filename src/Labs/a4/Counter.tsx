import { useState } from "react";

function Counter() {
    // let count = 7;
    const [count, setCount] = useState(7);
    console.log(count);
    
    return (
        <div>
            <h3>Counter: {count}</h3>
            {/* <button className="btn btn-success me-2" onClick={() => { count++; console.log("count = " + count); }}>Up</button>
            <button className="btn btn-danger" onClick={() => { count--; console.log("count = " + count); }}>Down</button> */}
            <button className="btn btn-success me-2" onClick={() => setCount(count + 1)}>Up</button>
            <button className="btn btn-danger" onClick={() => setCount(count - 1)}>Down</button>
        </div>
    );
}
export default Counter;