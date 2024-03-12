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

    return (
        <div>
            <h3 className="mt-2">Encoding Parameters In URLs</h3>
            <h4>Integrating React with APIs</h4>
            <h5>Fetching Welcome</h5>
            <h6>{welcome}</h6>

            <h4>Calculator</h4>

            <div className="mb-3">
                <input id="valueA" className="form-control mb-2" type="number" value={a} onChange={(e) => setA(parseInt(e.target.value))}/>
                <input id="valueB" className="form-control" type="number" onChange={(e) => setB(parseInt(e.target.value))} value={b}/>
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