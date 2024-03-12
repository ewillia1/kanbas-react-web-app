import { useEffect, useState } from "react";
import axios from "axios";

function EncodingParametersInURLs() {
    const [a, setA] = useState(34);
    const [b, setB] = useState(23);

    const [welcome, setWelcome] = useState("");

    // Asynchronously uses axios to send a GET request to /a5/welcome and returns the response from the server.
    // The data from tehserver is availble in response.data which we store in state variable welcome.
    const fetchWelcome = async () => {
        const response = await axios.get("http://localhost:4000/a5/welcome");
        setWelcome(response.data);
    };

    // The useEffect hook configures a function to call when the component first loads.
    // useEffect invokes the fetchWelcome function when the component loads.
    useEffect(() => {
        fetchWelcome();
    }, []);

    const [result, setResult] = useState(0);
    const fetchSum = async (a: any, b: any) => {
      const response = await axios.get(`http://localhost:4000/a5/add/${a}/${b}`);
      setResult(response.data);
    };  

    const fetchSubtraction = async (a: any, b: any) => {
        const response = await axios.get(`http://localhost:4000/a5/subtract/${a}/${b}`);
        setResult(response.data);
    };

    return (
        <div>
            <h3 className="mt-2">Encoding Parameters In URLs</h3>
            <h4>Integrating React with APIs</h4>
            <h5>Fetching Welcome From Server:</h5>
            <h6>{welcome}</h6>

            <h4>Calculator</h4>

            <div className="mb-3">
                <div className="row">
                    <label htmlFor="valueA" className="col-sm-2 col-form-label">Number 1</label>
                    <div className="col-sm-10">
                        <input id="valueA" className="form-control mb-2" type="number" value={a} onChange={(e) => setA(parseInt(e.target.value))}/>
                    </div>
                </div>
                <div className="row">
                    <label htmlFor="valueB" className="col-sm-2 col-form-label">Number 2</label>
                    <div className="col-sm-10">
                        <input id="valueB" className="form-control mb-2" type="number" value={b} onChange={(e) => setB(parseInt(e.target.value))}/>
                    </div>
                </div>
                <div className="row">
                    <label htmlFor="resultValue" className="col-sm-2 col-form-label">Result</label>
                    <div className="col-sm-10">
                        <input id="resultValue" className="form-control mb-2" value={result} type="number" readOnly />
                    </div>
                </div>
                
                <h3>Fetch Result</h3>
                <div className="d-grid gap-2">
                    <button onClick={() => fetchSum(a, b)} className="btn btn-primary me-2">Fetch Sum of {a} + {b}</button>
                    <button onClick={() => fetchSubtraction(a, b)} className="btn btn-danger me-2">Fetch Substraction of {a} - {b}</button>
                </div>
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