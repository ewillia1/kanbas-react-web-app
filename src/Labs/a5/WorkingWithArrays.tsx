import { useState, useEffect } from "react";
import axios from "axios";

type TodoType = {
    id: number | string,
    title: string,
    description: string,
    due: string,
    completed: boolean
};

function WorkingWithArrays() {
    const [errorMessage, setErrorMessage] = useState(null);
    const API = "http://localhost:4000/a5/todos";
    const [todo, setTodo] = useState<TodoType>({
        id: 0,
        title: "",
        description: "",
        due: "",
        completed: false
    });

    function handleChecked(e: boolean) {
        console.log("in handleChecked");
        console.log("e = " + e);
        setTodo({ ...todo, completed: e});
    }

    const [todos, setTodos] = useState<TodoType[]>([]);

    const postTodo = async () => {
        try {
            const response = await axios.post(API, todo);   // The second argument contains new todo object sent to server.
                                                        // Reponse contains the todo instance added to array instead of all todos on server.
            setTodos([...todos, response.data]);            // Reuse todos already in todos state variable to append new todo from server response at end of todos state variable.
        } catch (error: any) {
            console.log("error = " + error);      
        }
    };  
    
    const deleteTodo = async (todo: TodoType) => {
        try {
            const response = await axios.delete(`${API}/${todo.id}`);   // Invoke axios.delete passing the ID of the item to be removed from server array.
            setTodos(todos.filter((t) => t.id !== todo.id));            // Then filter out item from the local todos state variable.
            setErrorMessage(null);
        } catch (error: any) {
            console.log("error = " + error);
            setErrorMessage(error.response.data.message);      
        }
    }; 

    // Puts updates to the server.
    const updateTodo = async () => {
        try {
            const response = await axios.put(`${API}/${todo.id}`, todo);    // The second argument contains updated todo object instance sent to server.
                                                                            // Response contains status instead of all the todos on the server.
            setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));      // Reuse todos already in todos state variable to replace corresponding todo with new todo.
            setTodo({
                id: 0,
                title: "",
                description: "",
                due: "",
                completed: false
            });
            setErrorMessage(null);
        } catch (error: any) {
            console.log("error = " + error);
            setErrorMessage(error.response.data.message);      
        }
    };    

    const fetchTodos = async () => {
        try {
            const response = await axios.get(API);
            setTodos(response.data);
        } catch (error: any) {
            console.log("error = " + error);     
        }
    };

    const removeTodo = async (todo: TodoType) => {
        try {
            const response = await axios.get(`${API}/${todo.id}/delete`);
            setTodos(response.data);
        } catch (error: any) {
            console.log("error = " + error);
        }
    };

    const createTodo = async () => {
        try {
            const response = await axios.get(`${API}/create`);
            setTodos(response.data);
        } catch (error: any) {
            console.log("error = " + error);    
        }
    };  
    
    const fetchTodoById = async (id: any) => {
        try {
            const response = await axios.get(`${API}/${id}`);
            setTodo(response.data);
        } catch (error: any) {
            console.log("error = " + error);   
        }
    };  
    
    const updateTitle = async () => {
        try {
            const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
            setTodos(response.data);
        } catch (error: any) {
            console.log("error = " + error);
        }
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
                <h5>Note: Change number to be non-0 for this to work!</h5>
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
                    <input id="inputTodoDescription" className="form-control mb-2" type="text" value={todo.description} onChange={(e) => setTodo({ ...todo, description: e.target.value })}/>
                </div>
            </div>
            <div className="mb-3">
                <a type="button" className="btn btn-primary me-2 mb-2" href={`${API}/${todo.id}/description/${todo.description}`} >
                    Update Description to {todo.description}
                </a>
            </div>

            <div className="row">
                <label htmlFor="idTodo" className="col-sm-2 col-form-label">Todo ID (Read Only)</label>
                <div className="col-sm-10">
                    <input id="idTodo" className="form-control mb-3" type="text" value={todo.id} readOnly/>
                </div>
            </div>
            <div className="row">
                <label htmlFor="titleTodo" className="col-sm-2 col-form-label">Todo Title</label>
                <div className="col-sm-10">
                    <input id="titleTodo" className="form-control mb-3" type="text" value={todo.title} onChange={(e) => setTodo({ ...todo, title: e.target.value })}/>
                </div>
            </div>
            <div className="row">
                <label htmlFor="descriptionTodo" className="col-sm-2 col-form-label">Todo Description</label>
                <div className="col-sm-10">
                    <textarea id="descriptionTodo" className="form-control mb-3" value={todo.description} onChange={(e) => setTodo({ ...todo, description: e.target.value })} />
                </div>
            </div>
            <div className="row">
                <label htmlFor="dueDateTodo" className="col-sm-2 col-form-label">Todo Due Date</label>
                <div className="col-sm-10">
                    <input id="dueDateTodo" value={todo.due} className="form-control mb-3" type="date" onChange={(e) => setTodo({ ...todo, due: e.target.value })} />
                </div>
            </div>

            <div className="form-check mb-3">
                <input id="completedCheckBox" className="form-check-input" checked={todo.completed} type="checkbox" onChange={(e) => setTodo({ ...todo, completed: e.target.checked })} />
                <label htmlFor="completedCheckBox" className="form-check-label">Completed</label>
            </div>

            <button className="btn btn-warning mb-3" onClick={postTodo} style={{width: "-webkit-fill-available"}}>
                Post Todo
            </button>
            <button className="btn btn-primary mb-3" onClick={createTodo} style={{width: "-webkit-fill-available"}}>
                Create Todo
            </button>
            <button className="btn btn-success mb-3" onClick={updateTitle} style={{width: "-webkit-fill-available"}}>
                Update Title
            </button>
            {errorMessage && (
                    <div className="alert alert-danger mb-2 mt-2">
                        {errorMessage}
                    </div>
                )
            }
            <ul className="list-group mb-3">
                {todos.map((todo) => (
                    <li key={todo.id} className="list-group-item">
                        <div className="form-check mb-3">
                            <input id={todo.id.toString()} checked={todo.completed} type="checkbox" readOnly />
                            <label htmlFor={todo.id.toString()} className="form-check-label ms-2">{todo.title}</label>
                        </div>
                        <p><b>Todo Description: </b>{todo.description}</p>
                        <p><b>Todo Due Date: </b>{todo.due}</p>

                        <button className="btn btn-danger float-end ms-2" onClick={() => deleteTodo(todo)}>Delete</button>
                        <button className="btn btn-warning float-end ms-2" onClick={updateTodo}>Update Todo</button>
                        <button className="btn btn-warning float-end ms-2" onClick={() => fetchTodoById(todo.id)}>Edit</button>
                        {/* <button className="btn btn-danger float-end ms-2" onClick={() => removeTodo(todo)}>Remove</button> */}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default WorkingWithArrays;