import React, { useState } from "react";
import { MDBContainer, MDBCard, MDBCardBody, MDBInput } from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log({ name, email });
  };
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
            type="email"
            placeholder="Cloud ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Link to="/instructions">
            <Button
              className="mb-4 w-100"
              size="lg"
              variant="primary"
              onClick={handleSubmit}
            >
              Send Email
            </Button>
          </Link>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default SignUp;
