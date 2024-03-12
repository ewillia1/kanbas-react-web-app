import React, { useState } from "react";

function BooleanStateVariables() {
    const [done, setDone] = useState(true);

    return (
        <div>
            <h3>Boolean State Variables</h3>
            <p>{done ? "Done" : "Not done"}</p>
            <label className="form-control">
                <input id="doneCheckbox" type="checkbox" checked={done} onChange={() => setDone(!done)} /> Done
            </label>
            {done && <div className="alert alert-success">Yay! you are done</div>}
        </div>
    );
}
export default BooleanStateVariables;