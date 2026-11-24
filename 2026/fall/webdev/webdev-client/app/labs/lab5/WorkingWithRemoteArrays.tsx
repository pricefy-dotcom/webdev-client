"use client";
import { useState } from "react";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const API = `${HTTP_SERVER}/lab5/todos`;

export default function WorkingWithRemoteArrays() {
  const [todo, setTodo] = useState({
    id: "1",
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    completed: false,
  });
  const buttonClass = "mr-2 inline-block rounded bg-blue-600 px-3 py-1.5 text-sm text-white";
  const inputClass = "mb-2 mr-2 rounded border px-2 py-1";

  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>

      <h4>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className={buttonClass} href={API}>
        Get Todos
      </a>

      <h4>Retrieving an Item from an Array by ID</h4>
      <input id="wd-todo-id" className={inputClass} value={todo.id}
             onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
      <a id="wd-retrieve-todo-by-id" className={buttonClass} href={`${API}/${todo.id}`}>
        Get Todo by ID
      </a>

      <h4>Filtering Array Items</h4>
      <a id="wd-retrieve-completed-todos" className={buttonClass} href={`${API}?completed=true`}>
        Get Completed Todos
      </a>

      <h4>Creating new Items in an Array</h4>
      <a id="wd-create-todo" className={buttonClass} href={`${API}/create`}>
        Create Todo
      </a>

      <h4>Removing from an Array</h4>
      <a id="wd-remove-todo" className={buttonClass} href={`${API}/${todo.id}/delete`}>
        Remove Todo with ID = {todo.id}
      </a>

      <h4>Updating an Item in an Array</h4>
      <input className={inputClass} value={todo.id}
             onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
      <input className={inputClass} value={todo.title}
             onChange={(e) => setTodo({ ...todo, title: e.target.value })} />
      <a id="wd-update-todo-title" className={buttonClass}
         href={`${API}/${todo.id}/title/${todo.title}`}>
        Update Todo
      </a>

      <div className="mt-2">
        <input id="wd-todo-description" className={inputClass} value={todo.description}
               onChange={(e) => setTodo({ ...todo, description: e.target.value })} />
        <a id="wd-update-todo-description" className={buttonClass}
           href={`${API}/${todo.id}/description/${todo.description}`}>
          Describe Todo ID = {todo.id}
        </a>
      </div>
      <div className="mt-2">
        <input id="wd-todo-completed" type="checkbox" checked={todo.completed}
               onChange={(e) => setTodo({ ...todo, completed: e.target.checked })} />
        <label htmlFor="wd-todo-completed" className="ml-1 mr-2">Completed</label>
        <a id="wd-update-todo-completed" className={buttonClass}
           href={`${API}/${todo.id}/completed/${todo.completed}`}>
          Complete Todo ID = {todo.id}
        </a>
      </div>
      <hr />
    </div>
  );
}