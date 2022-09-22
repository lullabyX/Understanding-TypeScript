import React from "react";
import { Todo } from "../models/Todo.model";

const TodoList: React.FC<{ todos: Todo[]; onDelete: (id: string) => void }> = (
  props
) => {
  return (
    <ul>
      {props.todos.map((todo) => {
        return (
          <div>
            <li>{todo.name}</li>
            <button onClick={props.onDelete.bind(null, todo.id)}>delete</button>
          </div>
        );
      })}
    </ul>
  );
};

export default TodoList;
