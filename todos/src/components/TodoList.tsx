import React from "react";
import { Todo } from "../models/Todo.model";
import "./TodoList.css";

const TodoList: React.FC<{ todos: Todo[]; onDelete: (id: string) => void }> = (
  props
) => {
  return (
    <ul>
      {props.todos.map((todo) => {
        return (
            <span key={todo.id}>
              <li>{todo.name}</li>
              <button onClick={props.onDelete.bind(null, todo.id)}>
                delete
              </button>
            </span>
        );
      })}
    </ul>
  );
};

export default TodoList;
