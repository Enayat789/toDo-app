import { BrowserRouter } from "react-router-dom";
import Addtask from "./Components/Addtask/Addtask";
import Navbar from "./Components/Navbar/Navbar";
import ShowTodos from "./Components/ShowTodos/ShowTodos";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className=" bg-gray-100 mx-auto mt-8 w-3/12 h-[80vh] flex flex-col rounded-md p-0 shadow-lg">
          <Navbar />
          <Routes>
            <Route path="/" element={<Addtask />} />
            <Route path="/showtodos" element={<ShowTodos />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
