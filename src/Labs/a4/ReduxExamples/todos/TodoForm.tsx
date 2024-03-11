import { useSelector, useDispatch } from "react-redux";
import { LabState } from "../../../store";
import { setTodo, updateTodo, addTodo } from "./todosReducer";

function TodoForm() {
    const { todo } = useSelector((state: LabState) => state.todosReducer);
    const dispatch = useDispatch();

    return (
        <li className="list-group-item">
            <div className="form-outline w-25 float-start" data-mdb-input-init>
                <input className="form-control" value={todo.title} onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}/>
            </div>

            <div className="float-end">
                <button className="btn btn-warning me-2 mb-2" onClick={() => dispatch(updateTodo(todo))}>Update</button>
                <button className="btn btn-success me-2 mb-2" onClick={() => dispatch(addTodo(todo))}>Add</button>
            </div>
            <div className="wd-float-done"></div>
        </li>
    );
}
export default TodoForm;