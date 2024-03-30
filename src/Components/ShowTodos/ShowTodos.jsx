import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoAddCircleOutline } from "react-icons/io5";
import { deleteTodo, toggleTodo } from "../../Actions/Action";
import Modal from "../Addtask/Modal"; // Import your modal component

const ShowTodos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  // Function to handle deletion of a todo item
  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  // Function to toggle the completion status of a todo item
  const handleToggleComplete = (id) => {
    dispatch(toggleTodo(id));
  };

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="overflow-hidden">
      <Modal isOpen={isModalOpen} onClose={toggleModal} />

      <div className="flex flex-col items-center justify-center w-full gap-2 mt-2">
        {/* Mapping over todos array */}
        {todos.map((item) => {
          return (
            <div
              key={item.id}
              className={`todo flex flex-col bg-white rounded-md w-full md:max-w-xl p-2 py-2 items-center justify-between ${
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
                  className={`flex-1 overflow-scroll text-lg pl-4 ${
                    item.isCompleted ? "line-through" : ""
                  }`}
                >
                  {item.todo}
                </div>
                <button
                  className="bg-purple-500 p-3 py-2 mx-2 rounded-md text-white hover:bg-purple-600"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}

        {/* Button to toggle modal */}
        <div className="fixed bottom-8 right-8">
          <IoAddCircleOutline
            size={60}
            className="cursor-pointer bg-white rounded-full"
            onClick={toggleModal}
          />
        </div>
      </div>
    </div>
  );
};

export default ShowTodos;
