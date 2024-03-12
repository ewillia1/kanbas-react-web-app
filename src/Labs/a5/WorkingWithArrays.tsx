import { useState, useEffect } from "react";
import axios from "axios";

type TodoType = {
    id: number,
    title: string,
    description: string,
    due: string,
    completed: boolean
};

function WorkingWithArrays() {
    const API = "http://localhost:4000/a5/todos";
    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false
    });

    function handleChecked(e: boolean) {
        console.log("in handleChecked");
        console.log("e = " + e);
        setTodo({ ...todo, completed: e});
    }

    const [todos, setTodos] = useState<any[]>([]);

    const fetchTodos = async () => {
        console.log("in fetchTodos");
        const response = await axios.get(API);
        console.log("response = " + JSON.stringify(response));
        setTodos(response.data);
    };

    const removeTodo = async (todo: TodoType) => {
        const response = await axios.get(`${API}/${todo.id}/delete`);
        setTodos(response.data);
    };

    useEffect(() => {
        fetchTodos();
    }, []);  

    return (
        <div>
            <h3>Working with Arrays</h3>
            <h4 className="mt-2">Retrieving Arrays</h4>
            <a type="button" className="btn btn-primary me-2 mb-2" href={API}>
                Get Todos
            </a>

            <h4 className="mt-2">Filtering Array Items</h4>
            <a type="button" className="btn btn-primary me-2 mb-2" href={`${API}?completed=true`}>
                Get Completed Todos
            </a>

            <h4 className="mt-2">Creating new Items in an Array</h4>
            <a type="button" className="btn btn-primary me-2 mb-2" href={`${API}/create`}>
                Create Todo
            </a>

            <div className="text-center mb-3">
                <h4>Item ID to Get, Delete, or Update</h4>
            </div>

            <div className="row mb-3">
                <label htmlFor="inputID" className="col-sm-2 col-form-label">Item ID</label>
                <div className="col-sm-10">
                    <input id="inputID" className="form-control" type="number" min={0} value={todo.id} onChange={(e) => setTodo({ ...todo, id: parseInt(e.target.value) })}/>
                </div>
            </div>

            <h4 className="mt-2">Retrieving an Item from an Array by ID</h4>
            <a type="button" className="btn btn-primary me-2 mb-2" href={`${API}/${todo.id}`}>
                Get Todo by ID
            </a>

            <h4 className="mt-2">Deleting from an Array</h4>
            <a className="btn btn-primary me-2 mb-3" href={`${API}/${todo.id}/delete`}>
                Delete Todo with ID = {todo.id}
            </a>

            <h4>Updating an Item in an Array</h4>
            <h5>Updating Todo Title</h5>
            <div className="row">
                <label htmlFor="inputTodoTitle" className="col-sm-2 col-form-label">New Item Title</label>
                <div className="col-sm-10">
                    <input id="inputTodoTitle" className="form-control mb-2" type="text" value={todo.title} onChange={(e) => setTodo({ ...todo, title: e.target.value })}/>
                </div>
            </div>
            <div className="mb-3">
                <a className="btn btn-primary me-2 mb-2" href={`${API}/${todo.id}/title/${todo.title}`} >
                    Update Title to {todo.title}
                </a>
            </div>

            <h5>Updating Todo Completed</h5>
            <div className="row ms-1">
                <div className="form-check float-end">
                    <input className="form-check-input" type="checkbox" id="todoCompleted" onChange={(e) => handleChecked(e.target.checked)} checked={todo.completed}/>
                    <label className="form-check-label" htmlFor="todoCompleted">
                        Todo Completed
                    </label>    
                </div>
            </div>
            <div className="mb-3">
                <a type="button" className="btn btn-primary" href={`${API}/${todo.id}/completed/${todo.completed}`}>
                    Update Completed
                </a>
            </div>
            

            <h5>Updating Todo Description</h5>
            <div className="row">
                <label htmlFor="inputTodoDescription" className="col-sm-2 col-form-label">New Item Description</label>
                <div className="col-sm-10">
                    <input id="inputTodoDescription" className="form-control mb-2" type="text" value={todo.description} onChange={(e) => setTodo({ ...todo, title: e.target.value })}/>
                </div>
            </div>
            <div className="mb-3">
                <a type="button" className="btn btn-primary me-2 mb-2" href={`${API}/${todo.id}/description/${todo.description}`} >
                    Update Description to {todo.description}
                </a>
            </div>

            <ul className="list-group mb-3">
                {todos.map((todo) => (
                    <li key={todo.id} className="list-group-item">
                        <button className="btn btn-danger float-end" onClick={() => removeTodo(todo)}>Remove</button>
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default WorkingWithArrays;