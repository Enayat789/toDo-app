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
    console.log("Toggling modal");

    console.log("isModalOpen:", isModalOpen);
  };

  return (
    <div className=" overflow-scroll">
      <Modal isOpen={isModalOpen} onClose={toggleModal} />

      <div className="allTodos flex flex-col items-center justify-center w-full h-min gap-2 mt-2 ">
        {/* Mapping over todos array  */}
        {todos.map((item) => {
          return (
            <div
              key={item.id}
              className={`todo flex flex-row bg-white rounded-md w-[380px] p-2 py-2 items-center justify-between ${
                item.isCompleted ? "completed" : ""
              }`}
            >
              <input
                type="checkbox"
                className="w-4"
                checked={item.isCompleted}
                onChange={() => handleToggleComplete(item.id)}
              />
              <div
                className={`flex items-center w-[80%] p-2 overflow-scroll text-lg pl-4 ${
                  item.isCompleted ? "line-through" : ""
                }`}
              >
                {item.todo}
              </div>
              <div className="buttons flex">
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
        <div className="  absolute bottom-52">
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
