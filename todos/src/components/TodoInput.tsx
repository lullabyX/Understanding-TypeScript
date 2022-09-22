import { useRef } from "react";
import { Todo } from "../models/Todo.model";

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
      <div>
        <label htmlFor="todo-input">Add Todo</label>
        <input id="todo-input" ref={todoInputRef} />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default TodoInput;
