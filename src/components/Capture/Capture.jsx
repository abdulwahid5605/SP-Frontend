import React from "react";
import "./Capture.css";
import { Link } from "react-router-dom";

const Capture = () => {
  return (
    <div className="main-capture-container">
      <div className="main-capture-content">
        <div className="button-container">
          <Link to="/attendance-marked">
            <button className="capture-button">Start Capture</button>
          </Link>
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
