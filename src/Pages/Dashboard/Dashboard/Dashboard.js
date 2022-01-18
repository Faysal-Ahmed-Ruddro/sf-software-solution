import React from "react";
import "./Dashboard.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Dashboard = () => {
  const { logOut, admin } = useAuth();
  return (
    <div style={{ backgroundColor: "rgba(89, 152, 182, 0.199)" }}>
      <Container>
        <Row className="dashboard-row">
          <Col xs={12} md={12} lg={4}>
            <div className="dashboard">
              <Link to="myOrders">
                <li> My Orders</li>
              </Link>
              {admin && (
                <>
                  <Link to="makeAdmin">
                    <li>Make Admin </li>
                  </Link>
                  <Link to="addService">
                    <li>Add Service </li>
                  </Link>
                </>
              )}
              <Link to="">
                <li>Review </li>{" "}
              </Link>
              <Link onClick={logOut} to="#">
                <li>Log Out</li>
              </Link>
            </div>
          </Col>
          <Col xs={12} md={12} lg={8}>
            <div className="dashboard-details">
              <Outlet />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
