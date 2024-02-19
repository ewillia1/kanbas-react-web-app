import React, { useState } from "react";

function ArrayStateVariable() {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);            // Declare array state.
    const addElement = () => {                                      // Event handler appends
        setArray([...array, Math.floor(Math.random() * 100)]);      // random number at end of array.
    };
    const deleteElement = (index: number) => {                      // Event handler removes
        setArray(array.filter((item, i) => i !== index));           // element by index.
    };

    return (
        <div>
            <h3>Array State Variable</h3>
            <button className="btn btn-success mb-2" onClick={addElement}>Add Element</button>      {/* Button calls addElement to append to array. */}
            <ul className="list-group">
                {array.map((item, index) => (                       // Interate over array items.
                    <li key={index} className="list-group-item">
                        {item} <button className="btn btn-danger float-end" onClick={() => deleteElement(index)}>Delete</button>        {/* Render item's value button to delete element by its index. */}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ArrayStateVariable;