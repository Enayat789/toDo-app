import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "../../Actions/Action";

const Todo = () => {
  const [todo, setTodo] = useState(""); // State for holding the current todo item being added
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // Function to handle deletion of a todo item
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  // Function to handle addition of a new todo item
  const handleAdd = () => {
    if (todo.trim() !== "") {
      dispatch(addTodo({ id: uuidv4(), todo, isCompleted: false }));
      setTodo("");
    }
  };

  // Function to handle changes in the todo input field
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  // Function to toggle the completion status of a todo item
  const handleToggleComplete = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div className="container bg-purple-400 flex flex-col items-center mx-auto my-5 p-5 rounded-xl min-h-screen gap-4">
      <h2 className="font-bold text-2xl font-mono underline text-white">
        ADD A TODO
      </h2>
      <div className="bg-white add-todo flex mt-4 items-center justify-between p-3 rounded-md w-full md:w-3/4 lg:w-1/2">
        <input
          type="text"
          className="w-full px-3 py-2 outline-none rounded-md"
          onChange={handleChange}
          value={todo}
          placeholder="Task to be done..."
        />
        <button
          className="bg-purple-500 p-3 rounded-md text-white hover:bg-purple-600"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>

      <div className="allTodos flex flex-col items-center justify-center w-full gap-2 mt-8">
        {/* Mapping over todos array */}
        {todos.map((item) => (
          <div
            key={item.id}
            className={`todo flex flex-col bg-white rounded-md w-full md:max-w-lg lg:max-w-xl p-3 items-center justify-between ${
              item.isCompleted ? "completed" : ""
            }`}
          >
            <div className="flex items-center w-full">
              <input
                type="checkbox"
                className="w-4"
                checked={item.isCompleted}
                onChange={() => handleToggleComplete(item.id)}
              />
              <div
                className={`flex-1 overflow-hidden text-lg pl-4 ${
                  item.isCompleted ? "line-through" : ""
                }`}
              >
                {item.todo}
              </div>
              <button
                className="bg-purple-500 p-2 rounded-md text-white hover:bg-purple-600"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
