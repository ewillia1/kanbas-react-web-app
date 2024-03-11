import { useSelector, useDispatch } from "react-redux";
import { LabState } from "../../../store";
import { increment, decrement } from "./counterReducer";

function CounterRedux() {
    const { count } = useSelector((state: LabState) => state.counterReducer);
    const dispatch = useDispatch();
    
    return (
        <div>
            <h3>Counter Redux</h3>
            <h4>{count}</h4>
            <button className="btn btn-primary me-2 mb-4" onClick={() => dispatch(increment())}> Increment </button>
            <button className="btn btn-primary mb-4" onClick={() => dispatch(decrement())}> Decrement </button>
        </div>
    );
}
export default CounterRedux;