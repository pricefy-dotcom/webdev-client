import {
  createContext,
  createElement,
  useContext,
  useState,
  type ReactNode,
} from "react";

export type Todo = { id: string; title: string };

type TodosContextValue = {
  todos: Todo[];
  addTodo: (title: string) => void;
  updateTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
};

const TodosContext = createContext<TodosContextValue | null>(null);

const initialTodos: Todo[] = [
  { id: "1", title: "Learn React" },
  { id: "2", title: "Learn Node" },
];

export function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const addTodo = (title: string) =>
    setTodos((prev) => [...prev, { id: Date.now().toString(), title }]);

  const updateTodo = (todo: Todo) =>
    setTodos((prev) => prev.map((t) => (t.id === todo.id ? todo : t)));

  const deleteTodo = (id: string) =>
    setTodos((prev) => prev.filter((t) => t.id !== id));

  return createElement(
    TodosContext.Provider,
    { value: { todos, addTodo, updateTodo, deleteTodo } },
    children
  );
}

export function useTodosContext() {
  const value = useContext(TodosContext);
  if (!value) {
    throw new Error("useTodosContext must be used inside TodosProvider");
  }
  return value;
}
