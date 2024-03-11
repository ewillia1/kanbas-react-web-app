import { useState } from "react";

function WorkingWithArrays() {
    const API = "http://localhost:4000/a5/todos";
    const [todo, setTodo] = useState({id: 1});
    return (
        <div>
            <h3>Working with Arrays</h3>
            <h4>Retrieving Arrays</h4>
            <a type="button" className="btn btn-primary me-2 mb-2" href={API}>
                Get Todos
            </a>

            <h4>Retrieving an Item from an Array by ID</h4>
            <div className="mb-3 row">
                <div className="col-sm-9">
                <input className="form-control" type="number" min={0} value={todo.id} onChange={(e) => setTodo({ ...todo, id: parseInt(e.target.value) })}/>
                </div>
                <div className="col-sm-3">
                    <a type="button" className="btn btn-primary ms-2 me-2 mb-2" href={`${API}/${todo.id}`}>
                        Get Todo by ID
                    </a>
                </div>
            </div>

            <h3>Filtering Array Items</h3>
            <a type="button" className="btn btn-primary me-2 mb-2" href={`${API}?completed=true`}>
                Get Completed Todos
            </a>
        </div>
    );
}
export default WorkingWithArrays;