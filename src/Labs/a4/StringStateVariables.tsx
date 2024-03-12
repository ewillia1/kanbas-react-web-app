import React, { useState } from "react";

function StringStateVariables() {
    const [firstName, setFirstName] = useState("John");
    
    return (
        <div>
            <h2>String State Variables</h2>
            <p>{firstName}</p>
            <input id="stringStateVar" className="form-control mb-4" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        </div>
    );
}
export default StringStateVariables;