import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
import { TodoType } from "../../../store";

function TodoItem({ todo }: { todo: TodoType }) {
    const dispatch = useDispatch();
    console.log("todo = " + todo);
    console.log("todo.title = " + todo.title);
    return (
        <li key={todo.id} className="list-group-item">
            <button className="btn btn-danger me-2 float-end" onClick={() => dispatch(deleteTodo(todo.id))}> Delete </button>
            <button className="btn btn-primary me-2 float-end" onClick={() => dispatch(setTodo(todo))}> Edit </button>
            {todo.title}
        </li>
    );
}
export default TodoItem;