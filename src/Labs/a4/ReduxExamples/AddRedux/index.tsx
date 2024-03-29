import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { add } from "./addReducer";
import { LabState } from "../../../store";

function AddRedux() {
    const [a, setA] = useState(12);
    const [b, setB] = useState(23);
    const { sum } = useSelector((state: LabState) => state.addReducer);
    const dispatch = useDispatch();
    return (
        <div className="w-25">
            <h1>Add Redux</h1>
            <h2>{a} + {b} = {sum}</h2>
            <input id="num1" type="number" value={a} onChange={(e) => setA(parseInt(e.target.value))} className="form-control mb-2"/>
            <input id="num2" type="number" value={b} onChange={(e) => setB(parseInt(e.target.value))} className="form-control mb-2"/>
            <button onClick={() => dispatch(add({ a, b }))} className="btn btn-primary me-2 mb-4">Add Redux</button>
        </div>
    );
}
export default AddRedux;