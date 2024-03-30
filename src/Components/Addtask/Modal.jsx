import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../../Actions/Action";
import { Link } from "react-router-dom";

const Modal = ({ isOpen, onClose }) => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAdd = () => {
    if (todo.trim() !== "") {
      dispatch(addTodo({ id: uuidv4(), todo, isCompleted: false }));
      setTodo("");
      onClose(); // Close the modal after adding todo
    }
  };

  return (
    <div className={`fixed inset-0 ${isOpen ? "" : "hidden"}`}>
      <div className="flex items-center justify-center min-h-screen">
        <div className="modal-content bg-white w-11/12 md:w-80 h-auto flex flex-col items-center justify-evenly p-4 rounded-lg shadow-lg absolute top-52 ">
          <div className="modal-header  w-full flex flex-row items-center justify-between">
            <h2 className="text-lg md:text-xl font-bold">ADD A TODO</h2>
            <button onClick={onClose} className="text-black text-2xl">
              X
            </button>
          </div>

          <div className="modal-body mt-4">
            <div className="add-todo flex items-center">
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                onChange={handleChange}
                value={todo}
                placeholder="Task to be done..."
              />

              <Link to={"/showtodos"}>
                <button
                  className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                  onClick={handleAdd}
                >
                  Add
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
