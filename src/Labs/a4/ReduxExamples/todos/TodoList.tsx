import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

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
                <TodoForm todo={todo} setTodo={setTodo} addTodo={addTodo} updateTodo={updateTodo}/>
                
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} setTodo={setTodo} />
                ))}
            </ul>
        </div>
    );
}
export default TodoList;