import React from "react";
import "./RegistrationInstructions.css";
import { Link } from "react-router-dom";

const RegistrationInstructions = () => {
  return (
    <div className="main-instruction-container">
      <div className="main-instruction-content">
        <div className="welcome-container">
          <h1 className="welcome-heading">Welcome, Sana Mashhood!</h1>
        </div>
        <div className="instructions-container">
          <p className="instructions-text">
            You can only register once. The camera will remain on for 30
            seconds, kindly ensure that your background is plain and
            uncluttered. Sit in an illuminated room, and ensure your face covers
            as much of the frame as possible. While the camera remains on, avoid
            entrance of another face in the frame to prevent false detections.
          </p>
        </div>
        <div className="buttons-container">
          <Link to="/">
            <button className="action-button">Back to Home Page</button>
          </Link>
          <Link to="/recognition">
            <button className="action-button">Proceed to Registration</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationInstructions;
