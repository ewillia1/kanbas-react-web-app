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
            <a href={`http://localhost:4000/a5/subtract/${a}/${b}`} type="button" className="btn btn-danger me-2 mb-2">
                Substract {a} - {b}
            </a>
            <a href={`http://localhost:4000/a5/multiply/${a}/${b}`} type="button" className="btn btn-secondary me-2 mb-2">
                Multiply {a} * {b}
            </a>
            <a href={`http://localhost:4000/a5/divide/${a}/${b}`} type="button" className="btn btn-success me-2 mb-2">
                Divide {a} / {b}
            </a>

            <h3>Query Parameters</h3>

            <a className="btn btn-primary me-2 mb-2" href={`http://localhost:4000/a5/calculator?operation=add&a=${a}&b=${b}`}>
                Add {a} + {b}
            </a>
            <a className="btn btn-danger me-2 mb-2" href={`http://localhost:4000/a5/calculator?operation=subtract&a=${a}&b=${b}`}>
                Substract {a} - {b}
            </a>
            <a className="btn btn-secondary me-2 mb-2" href={`http://localhost:4000/a5/calculator?operation=multiply&a=${a}&b=${b}`}>
                Multiply {a} * {b}
            </a>
            <a className="btn btn-success me-2 mb-2" href={`http://localhost:4000/a5/calculator?operation=divide&a=${a}&b=${b}`}>
                Divide {a} / {b}
            </a>
        </div>
    );
}
export default EncodingParametersInURLs;