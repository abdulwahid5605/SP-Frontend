import React from "react";
import "./FaceRecognition.css";
const FaceRecognition = () => {
  return (
    <div className="main-recognition-container">
      <div className="main-recognition-content">
        <div className="button-container">
          <button className="capture-button">Start Capture</button>
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
        <div className="timer-container">
          <p className="timer-text">30 seconds remaining</p>
        </div>
      </div>
    </div>
  );
};

export default FaceRecognition;
