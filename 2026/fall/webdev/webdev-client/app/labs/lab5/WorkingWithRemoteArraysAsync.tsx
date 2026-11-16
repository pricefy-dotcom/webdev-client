"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaPencilAlt, FaPlusCircle, FaTrash } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import * as client from "./client";
import type { Todo } from "./client";

export default function WorkingWithRemoteArraysAsync() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Pull the server's { message } out of a failed request
  const showError = (error: unknown) => {
    if (axios.isAxiosError(error)) {
      setErrorMessage(error.response?.data?.message ?? error.message);
    } else {
      setErrorMessage(String(error));
    }
  };

  const fetchTodos = async () => {
    const data = await client.fetchTodos();
    setTodos(data);
  };

  // GET-based create: server returns the whole array
  const createNewTodo = async () => {
    const data = await client.createNewTodo();
    setTodos(data);
  };

  // POST-based create: server returns just the new todo
  const postNewTodo = async () => {
    const newTodo = await client.postNewTodo({
      title: "New Posted Todo",
      completed: false,
    });
    setTodos([...todos, newTodo]);
  };

  // GET-based delete: server returns the whole array
  const removeTodo = async (todo: Todo) => {
    const data = await client.removeTodo(todo);
    setTodos(data);
  };

  // DELETE-based delete: server returns only a status, so update locally
  const deleteTodo = async (todo: Todo) => {
    try {
      await client.deleteTodo(todo);
      setTodos(todos.filter((t) => t.id !== todo.id));
      setErrorMessage(null);
    } catch (error) {
      showError(error);
    }
  };

  // PUT-based update: server returns only a status, so update locally
  const updateTodo = async (todo: Todo) => {
    try {
      await client.updateTodo(todo);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
      setErrorMessage(null);
    } catch (error) {
      showError(error);
    }
  };

  // Local-only: switch a todo into edit mode
  const editTodo = (todo: Todo) => {
    setTodos(todos.map((t) => (t.id === todo.id ? { ...todo, editing: true } : t)));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>
      {errorMessage && (
        <p id="wd-todo-error-message" className="rounded bg-red-100 px-3 py-2 text-red-800">
          {errorMessage}
        </p>
      )}
      <h4 className="flex items-center gap-2">
        Todos
        <FaPlusCircle onClick={createNewTodo} id="wd-create-todo"
                      className="cursor-pointer text-green-600" />
        <FaPlusCircle onClick={postNewTodo} id="wd-post-todo"
                      className="cursor-pointer text-blue-600" />
      </h4>
      <ul className="divide-y rounded border">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center gap-2 px-3 py-2">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(e) => updateTodo({ ...todo, completed: e.target.checked })}
            />
            {!todo.editing ? (
              <span className={todo.completed ? "line-through" : ""}>{todo.title}</span>
            ) : (
              <input
                className="rounded border px-2"
                defaultValue={todo.title}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    updateTodo({ ...todo, title: e.currentTarget.value, editing: false });
                  }
                }}
              />
            )}
            <span className="ml-auto flex items-center gap-2">
              <FaPencilAlt onClick={() => editTodo(todo)}
                           className="cursor-pointer text-blue-600" />
              <TiDelete onClick={() => deleteTodo(todo)} id="wd-delete-todo"
                        className="cursor-pointer text-2xl text-red-600" />
              <FaTrash onClick={() => removeTodo(todo)} id="wd-remove-todo"
                       className="cursor-pointer text-red-600" />
            </span>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
