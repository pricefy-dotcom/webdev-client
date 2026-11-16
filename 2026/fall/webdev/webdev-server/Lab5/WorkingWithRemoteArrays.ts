import type { Express, Request, Response } from "express";

type Todo = {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
};

let todos: Todo[] = [
  { id: 1, title: "Task 1", completed: false },
  { id: 2, title: "Task 2", completed: true },
  { id: 3, title: "Task 3", completed: false },
  { id: 4, title: "Task 4", completed: true },
];

export default function WorkingWithRemoteArrays(app: Express) {
  // GET all todos, or only completed/uncompleted ones with ?completed=true|false
  const getTodos = (req: Request, res: Response) => {
    const { completed } = req.query;
    if (completed !== undefined) {
      const completedBool = completed === "true";
      res.json(todos.filter((t) => t.completed === completedBool));
      return;
    }
    res.json(todos);
  };

  const getTodoById = (req: Request, res: Response) => {
    const { id } = req.params as Record<string, string>;
    const todo = todos.find((t) => t.id === parseInt(id));
    res.json(todo);
  };

  // Old-style "create with GET" (kept so the 5.2.4 links still work)
  const createNewTodo = (req: Request, res: Response) => {
    const newTodo: Todo = {
      id: new Date().getTime(),
      title: "New Task",
      completed: false,
    };
    todos.push(newTodo);
    res.json(todos);
  };

  // Proper create with POST + JSON body
  const postNewTodo = (req: Request, res: Response) => {
    const newTodo: Todo = { ...req.body, id: new Date().getTime() };
    todos.push(newTodo);
    res.json(newTodo);
  };

  // Old-style "delete with GET"
  const removeTodo = (req: Request, res: Response) => {
    const { id } = req.params as Record<string, string>;
    const todoIndex = todos.findIndex((t) => t.id === parseInt(id));
    if (todoIndex !== -1) {
      todos.splice(todoIndex, 1);
    }
    res.json(todos);
  };

  // Proper delete with HTTP DELETE + 404 when missing
  const deleteTodo = (req: Request, res: Response) => {
    const { id } = req.params as Record<string, string>;
    const todoIndex = todos.findIndex((t) => t.id === parseInt(id));
    if (todoIndex === -1) {
      res.status(404).json({ message: `Unable to delete Todo with ID ${id}` });
      return;
    }
    todos.splice(todoIndex, 1);
    res.sendStatus(200);
  };

  // Proper update with HTTP PUT + 404 when missing
  const updateTodo = (req: Request, res: Response) => {
    const { id } = req.params as Record<string, string>;
    const todoIndex = todos.findIndex((t) => t.id === parseInt(id));
    if (todoIndex === -1) {
      res.status(404).json({ message: `Unable to update Todo with ID ${id}` });
      return;
    }
    todos = todos.map((t) =>
      t.id === parseInt(id) ? { ...t, ...req.body } : t
    );
    res.sendStatus(200);
  };

  const updateTodoTitle = (req: Request, res: Response) => {
    const { id, title } = req.params as Record<string, string>;
    const todo = todos.find((t) => t.id === parseInt(id));
    if (todo) todo.title = title;
    res.json(todos);
  };

  // On your own
  const updateTodoCompleted = (req: Request, res: Response) => {
    const { id, completed } = req.params as Record<string, string>;
    const todo = todos.find((t) => t.id === parseInt(id));
    if (todo) todo.completed = completed === "true";
    res.json(todos);
  };

  // On your own
  const updateTodoDescription = (req: Request, res: Response) => {
    const { id, description } = req.params as Record<string, string>;
    const todo = todos.find((t) => t.id === parseInt(id));
    if (todo) todo.description = description;
    res.json(todos);
  };

  // ORDER MATTERS: /create must come before /:id,
  // otherwise Express would treat "create" as an id.
  app.get("/lab5/todos", getTodos);
  app.get("/lab5/todos/create", createNewTodo);
  app.post("/lab5/todos", postNewTodo);
  app.get("/lab5/todos/:id", getTodoById);
  app.get("/lab5/todos/:id/delete", removeTodo);
  app.delete("/lab5/todos/:id", deleteTodo);
  app.put("/lab5/todos/:id", updateTodo);
  app.get("/lab5/todos/:id/title/:title", updateTodoTitle);
  app.get("/lab5/todos/:id/completed/:completed", updateTodoCompleted);
  app.get("/lab5/todos/:id/description/:description", updateTodoDescription);
}
