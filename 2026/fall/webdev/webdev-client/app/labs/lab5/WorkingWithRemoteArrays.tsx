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
  const linkClass = "mr-2 inline-block rounded bg-blue-600 px-3 py-1 text-white";
  const inputClass = "mb-2 mr-2 rounded border px-2 py-1";

  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>

      <h4>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className={linkClass} href={API}>
        Get Todos
      </a>

      <h4>Retrieving an Item from an Array by ID</h4>
      <input id="wd-todo-id" className={inputClass} value={todo.id}
             onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
      <a id="wd-retrieve-todo-by-id" className={linkClass} href={`${API}/${todo.id}`}>
        Get Todo by ID
      </a>

      <h4>Filtering Array Items</h4>
      <a id="wd-retrieve-completed-todos" className={linkClass}
         href={`${API}?completed=true`}>
        Get Completed Todos
      </a>

      <h4>Creating new Items in an Array</h4>
      <a id="wd-create-todo" className={linkClass} href={`${API}/create`}>
        Create Todo
      </a>

      <h4>Removing from an Array</h4>
      <a id="wd-remove-todo" className={linkClass} href={`${API}/${todo.id}/delete`}>
        Remove Todo with ID = {todo.id}
      </a>

      <h4>Updating an Item in an Array</h4>
      <input className={inputClass} value={todo.id}
             onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
      <input id="wd-todo-title" className={inputClass} value={todo.title}
             onChange={(e) => setTodo({ ...todo, title: e.target.value })} />
      <a id="wd-update-todo-title" className={linkClass}
         href={`${API}/${todo.id}/title/${todo.title}`}>
        Update Todo
      </a>

      {/* On your own: completed and description */}
      <div className="mt-2">
        <input id="wd-todo-description" className={inputClass} value={todo.description}
               onChange={(e) => setTodo({ ...todo, description: e.target.value })} />
        <a id="wd-update-todo-description" className={linkClass}
           href={`${API}/${todo.id}/description/${todo.description}`}>
          Describe Todo ID = {todo.id}
        </a>
      </div>
      <div className="mt-2">
        <input id="wd-todo-completed" type="checkbox" checked={todo.completed}
               onChange={(e) => setTodo({ ...todo, completed: e.target.checked })} />
        <label htmlFor="wd-todo-completed" className="ml-1 mr-2">Completed</label>
        <a id="wd-update-todo-completed" className={linkClass}
           href={`${API}/${todo.id}/completed/${todo.completed}`}>
          Complete Todo ID = {todo.id}
        </a>
      </div>
      <hr />
    </div>
  );
}
