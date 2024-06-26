import React from "react";
import "./Capture.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Capture = () => {
  const navigate = useNavigate();

  function handleCaptureClick() {
    axios
      .post("http://127.0.0.1:8000/predict/", null)
      .then((response) => {
        if (response.status === 200) {
          toast.error("Attendence is already done");
        } else if (response.status === 201) {
          toast.success("Attendence has been marked");
          localStorage.setItem("attendance", JSON.stringify(response.data));
          navigate("/attendance-marked");
        }
      })
      .catch((error) => {
        console.log("error", error);
        toast.error("Oops something went wrong!, please try again.");
      });
  }
  return (
    <div className="main-capture-container">
      <div className="main-capture-content">
        <div className="button-container">
          <button onClick={handleCaptureClick} className="capture-button">
            Start Capture
          </button>
        </div>
        <div className="image-capture-container">
          <div className="image-border">
            <img
              src="https://cdn1.iconfinder.com/data/icons/people-users-1/64/people-01-512.png"
              alt="Sample"
              className="captured-image"
            />
          </div>
        </div>
        <div className="note-container">
          <p className="note-paragraph">
            Note: <br />
            - Keep your face close to the screen, and ensure your entire face is
            within the frame. <br />
            - Do not sit against the light. All your features should be clearly
            visible. <br />- Choose a plain, uncluttered background to reduce
            distractions and potential false detections.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Capture;
