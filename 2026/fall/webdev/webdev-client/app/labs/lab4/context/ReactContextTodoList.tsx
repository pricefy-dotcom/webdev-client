"use client";

import { useState } from "react";
import { TodosProvider, useTodosContext, type Todo } from "./todosContext";

function TodoList() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodosContext();
  const [todo, setTodo] = useState<Todo>({ id: "", title: "" });

  const editing = todo.id !== "";

  const handleAdd = () => {
    if (!todo.title.trim()) return;
    addTodo(todo.title.trim());
    setTodo({ id: "", title: "" });
  };

  const handleUpdate = () => {
    if (!todo.title.trim()) return;
    updateTodo({ ...todo, title: todo.title.trim() });
    setTodo({ id: "", title: "" });
  };

  return (
    <div id="wd-context-todo-list">
      <h3>Todo List (Context)</h3>
      <ul className="divide-y rounded border">
        <li className="flex items-center gap-2 p-2">
          <input
            id="wd-context-todo-title"
            value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
            className="flex-1 rounded border px-2 py-1"
            placeholder="New todo"
          />
          <button
            type="button"
            id="wd-context-todo-add"
            onClick={handleAdd}
            className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
          >
            Add
          </button>
          <button
            type="button"
            id="wd-context-todo-update"
            onClick={handleUpdate}
            disabled={!editing}
            className="rounded bg-yellow-500 px-3 py-1.5 text-sm font-medium text-white disabled:opacity-50"
          >
            Update
          </button>
        </li>
        {todos.map((t) => (
          <li key={t.id} className="flex items-center gap-2 p-2">
            <span className="flex-1">{t.title}</span>
            <button
              type="button"
              onClick={() => setTodo(t)}
              className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
            >
              Edit
            </button>
            <button
              type="button"
              onClick={() => {
                deleteTodo(t.id);
                if (todo.id === t.id) setTodo({ id: "", title: "" });
              }}
              className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ReactContextTodoList() {
  return (
    <TodosProvider>
      <TodoList />
    </TodosProvider>
  );
}
