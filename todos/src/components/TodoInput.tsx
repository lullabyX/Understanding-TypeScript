import { useRef } from "react";
import { Todo } from "../models/Todo.model";
import "./TodoInput.css";

const TodoInput: React.FC<{ onAdd: (todo: Todo) => void }> = (props) => {
  const todoInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    props.onAdd({
      id: Math.random().toString(),
      name: todoInputRef.current!.value,
    });
    todoInputRef.current!.value = "";
  };
  return (
      <form onSubmit={submitHandler}>
        <label htmlFor="todo-input">Add Todo</label>
        <input id="todo-input" ref={todoInputRef} />
        <button>Submit</button>
      </form>
  );
};

export default TodoInput;
