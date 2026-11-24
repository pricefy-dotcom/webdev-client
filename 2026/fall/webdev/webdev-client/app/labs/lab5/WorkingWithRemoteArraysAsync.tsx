"use client";
import { useEffect, useState } from "react";
import { FaPencilAlt, FaPlusCircle, FaTrash } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import * as client from "./client";

export default function WorkingWithRemoteArraysAsync() {
  const [todos, setTodos] = useState<any[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fetchTodos = async () => {
    setTodos(await client.fetchTodos());
  };
  const removeTodo = async (todo: any) => {
    setTodos(await client.removeTodo(todo));
  };
  const createNewTodo = async () => {
    setTodos(await client.createNewTodo());
  };
  const postNewTodo = async () => {
    const newTodo = await client.postNewTodo({ title: "New Posted Todo", completed: false });
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = async (todo: any) => {
    try {
      await client.deleteTodo(todo);
      setTodos(todos.filter((t) => t.id !== todo.id));
    } catch (error: any) {
      setErrorMessage(error.response.data.message);
    }
  };
  const editTodo = (todo: any) => {
    setTodos(todos.map((t) => (t.id === todo.id ? { ...todo, editing: true } : t)));
  };
  const updateTodo = async (todo: any) => {
    try {
      await client.updateTodo(todo);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    } catch (error: any) {
      setErrorMessage(error.response.data.message);
    }
  };
  useEffect(() => { fetchTodos(); }, []);

  return (
    <div id="wd-asynchronous-arrays">
      <h3 className="flex items-center gap-2">
        Working with Arrays Asynchronously
        <FaPlusCircle id="wd-create-todo" onClick={createNewTodo}
                      className="cursor-pointer text-green-600" />
        <FaPlusCircle id="wd-post-todo" onClick={postNewTodo}
                      className="cursor-pointer text-blue-600" />
      </h3>
      {errorMessage && (
        <p id="wd-todo-error-message" className="rounded bg-red-100 px-3 py-2 text-red-800">
          {errorMessage}
        </p>
      )}
      <ul className="divide-y rounded border">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center gap-2 px-3 py-2">
            <input type="checkbox" checked={todo.completed}
                   onChange={(e) => updateTodo({ ...todo, completed: e.target.checked })} />
            {!todo.editing ? (
              <span className={todo.completed ? "line-through" : ""}>{todo.title}</span>
            ) : (
              <input className="rounded border px-2" defaultValue={todo.title}
                     onKeyDown={(e) => {
                       if (e.key === "Enter") {
                         updateTodo({ ...todo, title: e.currentTarget.value, editing: false });
                       }
                     }} />
            )}
            <span className="ml-auto flex items-center gap-2">
              <FaPencilAlt onClick={() => editTodo(todo)}
                           className="cursor-pointer text-blue-600" />
              <TiDelete id="wd-delete-todo" onClick={() => deleteTodo(todo)}
                        className="cursor-pointer text-2xl text-red-600" />
              <FaTrash id="wd-remove-todo" onClick={() => removeTodo(todo)}
                       className="cursor-pointer text-red-600" />
            </span>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}