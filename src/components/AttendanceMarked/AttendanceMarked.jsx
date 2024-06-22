import React from "react";
import "./AttendanceMarked.css";

const AttendanceMarked = () => {
  return (
    <div className="main-attendace-container">
      <div className="main-attendace-content">
        <div className="image-container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfz3upZJUzgki4bn27faJf6gPIIo7Yo5HxZg&s"
            alt="Sample"
            className="centered-image"
          />
        </div>
        <div className="text-container">
          <h1 className="name-heading">Sana Mashhood</h1>
          <p className="attendance-text">
            Your attendance for{" "}
            <span className="highlighted-date">21 - June - 2024</span> has been
            successfully marked.
          </p>
        </div>
        <div className="link-container">
          <a href="/" className="home-link">
            Back to Home Page
          </a>
        </div>
      </div>
    </div>
  );
};

export default AttendanceMarked;
