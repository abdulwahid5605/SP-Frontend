import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="main-container">
      <div className="main-content">
        <div className="heading-container">
          <h1 className="main-heading">
            NED University of Engineering and Technology
          </h1>
          <h2 className="sub-heading">Department of Software Engineering</h2>
        </div>
        <div className="images-container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD92c2t4hyLd2cPHjRwGhHbRa-nivhkBt_xg&s"
            alt="nedLogo"
            className="image"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbc_BR2r8zR8ETxrIHUDXu3YZVYTHFVnUvug&s"
            alt="nedLogo"
            className="image"
          />
        </div>
        <hr className="divider" />
        <div className="buttons-container">
          <a href="/register">
            <button className="register-button">Register My Face</button>
          </a>
          <a href="/attendance">
            <button className="attendance-button">
              Proceed to mark attendance
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
