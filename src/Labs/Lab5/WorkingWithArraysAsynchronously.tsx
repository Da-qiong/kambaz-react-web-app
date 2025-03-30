import { useState, useEffect } from "react";
import { FaTrash, FaPlusCircle } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";
import * as client from "./client";

export default function WorkingWithArraysAsynchronously() {
  const [todos, setTodos] = useState<any[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // ✅ 初始化加载
  const fetchTodos = async () => {
    const data = await client.fetchTodos();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // ✅ GET 创建 todo
  const createTodo = async () => {
    const data = await client.createTodo();
    setTodos(data);
  };

  // ✅ POST 创建 todo
  const postTodo = async () => {
    const newTodo = await client.postTodo({
      title: "New Posted Todo",
      completed: false
    });
    setTodos([...todos, newTodo]);
  };

  // ✅ GET 删除 todo
  const removeTodo = async (todo: any) => {
    const data = await client.removeTodo(todo);
    setTodos(data);
  };

  // ✅ DELETE 删除 todo
  const deleteTodo = async (todo: any) => {
    try {
      await client.deleteTodo(todo);
      const newTodos = todos.filter((t) => t.id !== todo.id);
      setTodos(newTodos);
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || "Delete failed");
    }
  };

  // ✅ 编辑模式切换
  const editTodo = (todo: any) => {
    const updatedTodos = todos.map((t) =>
      t.id === todo.id ? { ...t, editing: true } : t
    );
    setTodos(updatedTodos);
  };

  // ✅ PUT 更新 todo
  const updateTodo = async (todo: any) => {
    try {
      await client.updateTodo(todo);
      setTodos(
        todos.map((t) => (t.id === todo.id ? { ...todo, editing: false } : t))
      );
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || "Update failed");
    }
  };

  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>

      {errorMessage && (
        <div className="alert alert-danger mb-2">{errorMessage}</div>
      )}

      <h4>
        Todos
        <FaPlusCircle
          onClick={createTodo}
          className="text-success float-end fs-3"
          title="GET Create"
        />
        <FaPlusCircle
          onClick={postTodo}
          className="text-primary float-end fs-3 me-3"
          title="POST Create"
        />
      </h4>

      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">

            <FaTrash
              onClick={() => removeTodo(todo)}
              className="text-danger float-end mt-1"
              title="GET Delete"
              role="button"
            />
            <TiDelete
              onClick={() => deleteTodo(todo)}
              className="text-danger float-end fs-3 me-2"
              title="DELETE Delete"
              role="button"
            />

            <FaPencil
              onClick={() => editTodo(todo)}
              className="text-primary float-end me-2 mt-1"
              title="Edit Title"
              role="button"
            />

            <input
              type="checkbox"
              className="form-check-input me-2 float-start"
              checked={todo.completed}
              onChange={(e) =>
                updateTodo({ ...todo, completed: e.target.checked })
              }
            />

            {!todo.editing ? (
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  marginLeft: "2rem"
                }}
              >
                {todo.title}
              </span>
            ) : (
              <input
                className="form-control w-50 d-inline-block ms-2"
                defaultValue={todo.title}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    updateTodo({ ...todo, editing: false });
                  }
                }}
                onChange={(e) =>
                  setTodos(
                    todos.map((t) =>
                      t.id === todo.id
                        ? { ...t, title: e.target.value }
                        : t
                    )
                  )
                }
              />
            )}
          </li>
        ))}
      </ul>

      <hr />
    </div>
  );
}