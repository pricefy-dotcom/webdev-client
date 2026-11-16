import axios from "axios";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export type Todo = {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  editing?: boolean;
};

// ----- Welcome (5.2.5.3) -----
export const fetchWelcomeMessage = async () => {
  const response = await axios.get(`${HTTP_SERVER}/lab5/welcome`);
  return response.data;
};

// ----- Assignment object (5.2.5.5) -----
const ASSIGNMENT_API = `${HTTP_SERVER}/lab5/assignment`;

export const fetchAssignment = async () => {
  const response = await axios.get(ASSIGNMENT_API);
  return response.data;
};

export const updateTitle = async (title: string) => {
  const response = await axios.get(`${ASSIGNMENT_API}/title/${title}`);
  return response.data;
};

// ----- Todos array (5.2.5.6 – 5.2.6) -----
const TODOS_API = `${HTTP_SERVER}/lab5/todos`;

export const fetchTodos = async (): Promise<Todo[]> => {
  const response = await axios.get(TODOS_API);
  return response.data;
};

// Old GET-based delete: server returns the whole array
export const removeTodo = async (todo: { id: number }): Promise<Todo[]> => {
  const response = await axios.get(`${TODOS_API}/${todo.id}/delete`);
  return response.data;
};

// Old GET-based create: server returns the whole array
export const createNewTodo = async (): Promise<Todo[]> => {
  const response = await axios.get(`${TODOS_API}/create`);
  return response.data;
};

// POST: server returns only the new todo
export const postNewTodo = async (todo: {
  title: string;
  completed: boolean;
}): Promise<Todo> => {
  const response = await axios.post(TODOS_API, todo);
  return response.data;
};

// DELETE: server returns only a status code
export const deleteTodo = async (todo: { id: number }) => {
  const response = await axios.delete(`${TODOS_API}/${todo.id}`);
  return response.data;
};

// PUT: server returns only a status code
export const updateTodo = async (todo: Todo) => {
  const response = await axios.put(`${TODOS_API}/${todo.id}`, todo);
  return response.data;
};

// ----- Next.js Route Handler (5.3) — same origin, so no HTTP_SERVER -----
export const fetchHello = async () => {
  const response = await fetch("/api/lab5/hello");
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  return response.json();
};
