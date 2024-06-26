import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/register/SignUp";
// import FetchedImages from "./components/FetchedImages";
import Home from "./components/Home/Home";
import Capture from "./components/Capture/Capture";
import AttendanceMarked from "./components/AttendanceMarked/AttendanceMarked";
import RegistrationInstructions from "./components/RegistrationInstructions/RegistrationInstructions";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Result from "./components/Result/Result";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/first-page" element={<FetchedImages />}></Route> */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<SignUp />}></Route>
          <Route path="/attendance" element={<Capture />}></Route>
          <Route
            path="/attendance-marked"
            element={<AttendanceMarked />}
          ></Route>
          <Route
            path="/instructions"
            element={<RegistrationInstructions />}
          ></Route>
          <Route path="/recognition" element={<FaceRecognition />}></Route>
          <Route path="/result" element={<Result />}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
