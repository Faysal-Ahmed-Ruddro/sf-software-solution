import React from "react";
import { useState } from "react";
import { Col, Container, Row, Spinner} from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Regester.css";
import swal from "sweetalert";

const Regester = () => {
  const [registerData, setRegister] = useState();
  const { user,error,googleSignIn,githubSignIn,registerNewUser,isLoading} = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn(location, navigate);
  };

  const handleGithubSignIn = () => {
    githubSignIn(location, navigate);
  };

  // form
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setRegister(newRegisterData);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.password2) {
      swal({
        title: "Error",
        text: "Your Password didn't matched !",
        icon: "error",
      });
      return;
    }
    registerNewUser(
      registerData.email,
      registerData.password,
      registerData.name,
      location,
      navigate
    );
  };

  return (
    <div className="regester-form-bg">
      <Container>
        <h2 className="fw-bolder text-center">Register Form</h2>
        <hr />
        <Row className="d-flex justify-content-center align-items-center py-4">
          <Col xs={12} md={6} lg={6}>
            
            <div style={{ marginLeft: "6%" }}>
              <button
                className=" me-2"
                onClick={handleGoogleSignIn}
                type="submit"
              >
                <i
                  style={{
                    fontSize: "25px",
                    marginLeft: "20px",
                    marginRight: "10px",
                  }}
                  className="fab fa-google me-2"
                ></i>
                Login with Google
              </button>
              <button onClick={handleGithubSignIn} type="submit">
                <i
                  style={{
                    fontSize: "25px",
                    marginLeft: "20px",
                    marginRight: "10px",
                  }}
                  className="fab fa-github me-2"
                ></i>
                Login with Github
              </button>

              <h4 className="fs-5 text-left">
                <NavLink style={{ textDecoration: "none" }} to="/login">
                  Already have an account? Login Here
                </NavLink>
              </h4>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6}>
            {!isLoading && (
              <form onSubmit={handleOnSubmit}>
                <input
                  type="text"
                  name="name"
                  onBlur={handleOnBlur}
                  placeholder="Full Name"
                  autoComplete="off"
                  required
                />
                <input
                  type="email"
                  name="email"
                  onBlur={handleOnBlur}
                  placeholder="Email"
                  autoComplete="off"
                  required
                />
                <input
                  type="password"
                  name="password"
                  onBlur={handleOnBlur}
                  placeholder="Password"
                  autoComplete="off"
                  required
                />
                <input
                  type="password"
                  name="password2"
                  onBlur={handleOnBlur}
                  placeholder="Confirm Password"
                  autoComplete="off"
                  required
                />
                <button type="submit">Submit</button>
              </form>
            )}
            {isLoading && <Spinner animation="border" variant="info" />}
            {user.email && <p>USer Created successfully</p>}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Regester;
