function TodoForm({ todo, setTodo, addTodo, updateTodo }: { todo: { id: string; title: string }; setTodo: (todo: { id: string; title: string }) => void; addTodo: (todo: { id: string; title: string }) => void; updateTodo: (todo: { id: string; title: string }) => void; }) {
    return (
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
    );
}
export default TodoForm;