import React, { useEffect, useState } from "react";
import { MDBContainer, MDBCard, MDBCardBody, MDBInput } from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    axios
      .post("http://127.0.0.1:8000/students/", { name: name, roll: rollNo })
      .then((result) => {
        if (result.status === 201) {
          localStorage.setItem(
            "user",
            JSON.stringify({ name: result.data.name, roll: result.data.roll })
          );
          console.log(result.data.roll);
          navigate("/instructions");
        }
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };
  useEffect(() => {
    const user = localStorage.getItem("user");

    const user1 = JSON.parse(user);
    console.log(user1);
    // if(user){
    //   navigate("/instructions")
    // }
  }, []);
  return (
    <MDBContainer
      fluid
      className="vh-100 d-flex align-items-center justify-content-center bg-image"
      style={{
        backgroundImage:
          "url(https://www.kentcam.com/camattendance/blog/wp-content/uploads/2023/01/MicrosoftTeams-image-246-1024x599.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="mask gradient-custom-3"></div>
      <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
        <MDBCardBody className="px-5">
          <h2 className="text-uppercase text-center mb-5">Register Yourself</h2>
          <MDBInput
            wrapperClass="mb-4"
            size="lg"
            id="form1"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <MDBInput
            wrapperClass="mb-4"
            size="lg"
            id="form2"
            type="text"
            placeholder="Cloud ID"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
          />

          <Button
            className="mb-4 w-100"
            size="lg"
            variant="primary"
            onClick={handleSubmit}
          >
            Send Email
          </Button>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default SignUp;
