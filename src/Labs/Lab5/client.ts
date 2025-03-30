import axios from "axios";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ASSIGNMENT_API = `${REMOTE_SERVER}/lab5/assignment`;
const TODOS_API = `${REMOTE_SERVER}/lab5/todos`;

export const fetchWelcomeMessage = async () => {
    const res = await axios.get(`${REMOTE_SERVER}/lab5/welcome`);
    return res.data;
};

export const fetchAssignment = async () => {
    const res = await axios.get(ASSIGNMENT_API);
    return res.data;
};
export const updateTitle = async (title: string) => {
    const res = await axios.get(`${ASSIGNMENT_API}/title/${title}`);
    return res.data;
};

export const fetchTodos = async () => {
    const res = await axios.get(TODOS_API);
    return res.data;
};

export const createTodo = async () => {
    const res = await axios.get(`${TODOS_API}/create`);
    return res.data;
};
export const removeTodo = async (todo: any) => {
    const res = await axios.get(`${TODOS_API}/${todo.id}/delete`);
    return res.data;
};

export const postTodo = async (todo: any) => {
    const res = await axios.post(`${TODOS_API}`, todo);
    return res.data;
};

export const deleteTodo = async (todo: any) => {
    const res = await axios.delete(`${TODOS_API}/${todo.id}`);
    return res.data;
};

export const updateTodo = async (todo: any) => {
    const res = await axios.put(`${TODOS_API}/${todo.id}`, todo);
    return res.data;
};


export const updateAssignmentCompleted = async (completed: boolean) => {
    const res = await axios.get(`${ASSIGNMENT_API}/completed/${completed}`);
    return res.data;
};

export const updateTodoTitle = async (todo: any) => {
    const res = await axios.get(`${TODOS_API}/${todo.id}/title/${todo.title}`);
    return res.data;
};

export const updateTodoCompleted = async (todo: any) => {
    const res = await axios.get(`${TODOS_API}/${todo.id}/completed/${todo.completed}`);
    return res.data;
};
