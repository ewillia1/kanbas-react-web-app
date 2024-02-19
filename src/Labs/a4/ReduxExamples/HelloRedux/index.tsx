import { useSelector, useDispatch } from "react-redux";
import { LabState } from "../../../store";

function HelloRedux() {
    const { message } = useSelector((state: LabState) => state.helloReducer);
    
    return (
        <div>
            <h3>Hello Redux</h3>
            <h4>{message}</h4>
        </div>
    );
}
export default HelloRedux;