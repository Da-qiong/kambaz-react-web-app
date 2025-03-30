import { useState } from "react";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const API = `${REMOTE_SERVER}/lab5/todos`;

export default function WorkingWithArrays() {
    const [todo, setTodo] = useState({
        id: "1",
        title: "NodeJS Assignment",
        description: "Create a server",
        completed: false,
    });

    return (
        <div>
            <h2>Working with Arrays</h2>

            <h3>Retrieve All</h3>
            <a href={API} className="btn btn-primary">Get All Todos</a>

            <h3>Get by ID</h3>
            <input value={todo.id} onChange={e => setTodo({ ...todo, id: e.target.value })} />
            <a href={`${API}/${todo.id}`} className="btn btn-secondary">Get Todo by ID</a>

            <h3>Filter by Completed</h3>
            <a href={`${API}?completed=true`} className="btn btn-info">Get Completed Todos</a>

            <h3>Create New</h3>
            <a href={`${API}/create`} className="btn btn-success">Create Todo</a>

            <h3>Delete</h3>
            <a href={`${API}/${todo.id}/delete`} className="btn btn-danger">Delete Todo</a>

            <h3>Update Title</h3>
            <input value={todo.title} onChange={e => setTodo({ ...todo, title: e.target.value })} />
            <a href={`${API}/${todo.id}/title/${todo.title}`} className="btn btn-warning">Update Title</a>

            <h3>Update Description</h3>
            <input value={todo.description} onChange={e => setTodo({ ...todo, description: e.target.value })} />
            <a href={`${API}/${todo.id}/description/${todo.description}`} className="btn btn-dark">Update Description</a>

            <h3>Update Completed</h3>
            <input type="checkbox" checked={todo.completed} onChange={e => setTodo({ ...todo, completed: e.target.checked })} />
            <a href={`${API}/${todo.id}/completed/${todo.completed}`} className="btn btn-dark ms-2">Update Completed</a>
        </div>
    );
}
