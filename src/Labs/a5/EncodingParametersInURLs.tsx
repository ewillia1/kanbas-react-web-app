import React, { useState } from "react";

function EncodingParametersInURLs() {
    const [a, setA] = useState(34);
    const [b, setB] = useState(23);

    return (
        <div>
            <h3 className="mt-2">Encoding Parameters In URLs</h3>

            <h4>Calculator</h4>

            <div className="mb-3">
                <input className="form-control mb-2" type="number" value={a} onChange={(e) => setA(parseInt(e.target.value))}/>
                <input className="form-control" type="number" onChange={(e) => setB(parseInt(e.target.value))} value={b}/>
            </div>

            <h3>Path Parameters</h3>

            <a href={`http://localhost:4000/a5/add/${a}/${b}`} type="button" className="btn btn-primary me-2 mb-2">
                Add {a} + {b}
            </a>
            <a href={`http://localhost:4000/a5/subtract/${a}/${b}`} type="button" className="btn btn-danger mb-2">
                Substract {a} - {b}
            </a>
        </div>
    );
}
export default EncodingParametersInURLs;