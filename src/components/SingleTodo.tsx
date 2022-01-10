import React from "react";
import { Todo } from "../model";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineDoneOutline } from "react-icons/md";
import './styles.css'

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  return (
    <div className="todos_single">
      <span className="todos_single_text">{todo.todo}</span>
      <div>
        <span className="icon">
          <GrEdit />
        </span>
        <span className="icon">
          <RiDeleteBin6Line />
        </span>
        <span className="icon">
          <MdOutlineDoneOutline />
        </span>
      </div>
    </div>
  );
};

export default SingleTodo;
