import { useState } from "react";

function TodoList() {
    const [todos, setTodos] = useState([
        { id: "1", title: "Learn React" },
        { id: "2", title: "Learn Node"  }
    ]);

    const [todo, setTodo] = useState({ id: "-1", title: "Learn Mongo" });
    
    const addTodo = (todo: any) => {
        const newTodos = [ ...todos, { ...todo, id: new Date().getTime().toString() }];
        setTodos(newTodos);
        setTodo({id: "-1", title: ""});
    };

    const deleteTodo = (id: string) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    };

    const updateTodo = (todo: any) => {
        const newTodos = todos.map((item) =>
        (item.id === todo.id ? todo : item));
        setTodos(newTodos);
        setTodo({id: "-1", title: ""});
    };

    return (
        <div>
            <h3>Todo List</h3>
            <ul className="list-group mb-4">

                <li className="list-group-item">
                    <div className="form-outline w-25 float-start" data-mdb-input-init>
                        <input className="form-control" value={todo.title} onChange={(e) => setTodo({ ...todo, title: e.target.value })}/>
                    </div>

                    <div className="float-end">
                        <button className="btn btn-warning me-2 mb-2" onClick={() => updateTodo(todo)}>Update</button>
                        <button className="btn btn-success me-2 mb-2" onClick={() => addTodo(todo)}>Add</button>
                    </div>
                    <div className="wd-float-done"></div>
                </li>

                {todos.map((todo) => (
                    <li key={todo.id} className="list-group-item">
                        <button className="btn btn-danger me-2 float-end" onClick={() => deleteTodo(todo.id)}>Delete </button>
                        <button className="btn btn-primary me-2 float-end" onClick={() => setTodo(todo)}>Edit </button>
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default TodoList;