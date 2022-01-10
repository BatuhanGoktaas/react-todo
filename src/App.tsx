import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isComplete: false }]);
      setTodo("");
    }
  };

  console.log(todos);

  return (
    <>
      <div className="App">
        <span className="heading">Plan Rehberim</span>
        <Input todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        {/* TO DO LİST */}
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
};

export default App;
