"use client";
import { useEffect, useState } from "react";
import { FaPlusCircle, FaTrash } from "react-icons/fa";
import * as client from "./client";

export default function WorkingWithRemoteArraysAsync() {
  const [todos, setTodos] = useState<any[]>([]);

  const fetchTodos = async () => {
    const data = await client.fetchTodos();
    setTodos(data);
  };
  const removeTodo = async (todo: any) => {
    const data = await client.removeTodo(todo);
    setTodos(data);
  };
  const createNewTodo = async () => {
    const data = await client.createNewTodo();
    setTodos(data);
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div id="wd-asynchronous-arrays">
      <h3 className="flex items-center gap-2">
        Working with Arrays Asynchronously
        <FaPlusCircle id="wd-create-todo" onClick={createNewTodo}
                      className="cursor-pointer text-green-600" />
      </h3>
      <ul className="divide-y rounded border">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center gap-2 px-3 py-2">
            <input type="checkbox" defaultChecked={todo.completed} />
            <span className={todo.completed ? "line-through" : ""}>{todo.title}</span>
            <FaTrash id="wd-remove-todo" onClick={() => removeTodo(todo)}
                     className="ml-auto cursor-pointer text-red-600" />
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}