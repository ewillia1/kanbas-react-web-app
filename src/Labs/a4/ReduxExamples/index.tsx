import { useSelector } from "react-redux";
import { LabState } from "../../store";
import AddRedux from "./AddRedux";
import CounterRedux from "./CounterRedux";
import HelloRedux from "./HelloRedux";
import TodoList from "./todos/TodoList";

const ReduxExamples = () => {
    const { todos } = useSelector((state: LabState) => state.todosReducer);
    
    return(
        <div>
            <h2>Redux Examples</h2>
            <HelloRedux/>
            <CounterRedux/>
            <AddRedux/>
            <TodoList/>
        </div>
    );
};
export default ReduxExamples;