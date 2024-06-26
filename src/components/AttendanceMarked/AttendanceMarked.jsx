import React, { useEffect, useState } from "react";
import "./AttendanceMarked.css";

const AttendanceMarked = () => {
  const [attenDetail, setAttenDetail] = useState(null);

  useEffect(() => {
    const detail = localStorage.getItem("attendance");
    setAttenDetail(detail);
  }, []);
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
          <h1 className="name-heading">{attenDetail?.name}</h1>
          <p className="attendance-text">
            Your attendance for{" "}
            <span className="highlighted-date">{attenDetail?.date}</span> has
            been successfully marked.
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
