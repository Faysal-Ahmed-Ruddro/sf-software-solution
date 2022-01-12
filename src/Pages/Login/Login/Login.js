import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { googleSignIn, githubSignIn,signInUser } = useAuth();

  const location = useLocation();
  const  navigate = useNavigate()

  const handleGoogleSignIn = () => {
    googleSignIn(location, navigate);
  };
  const handleGithubSignIn = () => {
    githubSignIn(location, navigate);
  };

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault()
    signInUser(loginData.email,loginData.password,location,navigate)
  };
  return (
    <div className="regester-form-bg">
      <Container>
        <h2 className="fw-bolder text-center">Login Form</h2>
        <hr className="" />
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
                <NavLink style={{ textDecoration: "none" }} to="/regester">
                  New User? Register Here.
                </NavLink>
              </h4>
            </div>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <form onSubmit={handleOnSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                onBlur={handleOnBlur}
                autoComplete="off"
              />
              <input
                type="password"
                name="password"
                placeholder="Your Password"
                onBlur={handleOnBlur}
                autoComplete="off"
              />
              <button type="submit" variant="outline-info">
                Submit
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
