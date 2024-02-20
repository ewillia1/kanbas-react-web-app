function TodoItem({ todo, deleteTodo, setTodo }: { todo: { id: string; title: string }; deleteTodo: (id: string) => void; setTodo: (todo: { id: string; title: string }) => void; }) {
    return (
        <li key={todo.id} className="list-group-item">
            <button className="btn btn-danger me-2 float-end" onClick={() => deleteTodo(todo.id)}>Delete </button>
            <button className="btn btn-primary me-2 float-end" onClick={() => setTodo(todo)}>Edit </button>
            {todo.title}
        </li>
    );
}
export default TodoItem;