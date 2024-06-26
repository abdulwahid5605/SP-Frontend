import React, { useState } from "react";
import "./FaceRecognition.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const FaceRecognition = () => {
  const [rollNo, setRollNo] = useState("SE-20023");
  const navigate = useNavigate();
  function handleClickCapture() {
    const data = localStorage.getItem("user");
    const user = JSON.parse(data);

    if (user) {
      axios
        .post("http://127.0.0.1:8000/facecapture/", { roll_no: user.roll })
        .then((result) => {
          if (result.status === 200) {
            console.log(result);
            navigate("/Result");
            toast.success("Face captured successfully!");
          }
        })
        .catch((err) => {
          console.log(err, "error");
          toast.error("Face couldn't be captured, please retry.");
        });
    }
  }

  return (
    <div className="main-recognition-container">
      <ToastContainer />
      <div className="main-recognition-content">
        <div className="button-container">
          <button className="capture-button" onClick={handleClickCapture}>
            Start Capture
          </button>
        </div>
        <div className="image-container">
          <div className="image-border">
            <img
              src="https://cdn1.iconfinder.com/data/icons/people-users-1/64/people-01-512.png"
              alt="Sample"
              className="centered-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaceRecognition;
