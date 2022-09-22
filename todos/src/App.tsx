import { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { Todo } from "./models/Todo.model";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const deleteTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };
  
  const addTodoHandler = (todo: Todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, todo];
    });
  };

  return (
    <div className="App">
      <TodoInput onAdd={addTodoHandler} />
      <TodoList todos={todos} onDelete={deleteTodoHandler} />
    </div>
  );
}

export default App;
