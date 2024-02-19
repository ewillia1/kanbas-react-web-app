import React, { useState } from "react";

function ObjectStateVariable() {
    const [person, setPerson] = useState({ name: "Peter", age: 24 });
    return (
        <div>
            <h3>Object State Variables</h3>
            <pre>{JSON.stringify(person, null, 2)}</pre>
            <input className="form-control mb-2" value={person.name} onChange={(e) => setPerson({ ...person, name: e.target.value })}/>               {/* The spreader operator: ...person */}
            <input className="form-control" value={person.age} onChange={(e) => setPerson({ ...person, age: parseInt(e.target.value) })}/>
        </div>
    );
}
export default ObjectStateVariable;