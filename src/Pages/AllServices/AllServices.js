import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./AllServices.css";

const AllServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://infinite-thicket-64777.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="allService-bg">
      <Container className="py-4">
        <Row className="mx-auto">
          {services.map((service) => (
            <Col className="my-3" key={service?._id} xs={12} md={6} lg={4}>
              <Card className="mx-auto fluid card-container">
                <Card.Img
                  width="100%"
                  height="200px"
                  variant="top"
                  src={service?.photoUrl}
                />
                <Card.Body style={{ background: "transparent" }}>
                  <Card.Title>{service?.serviceName}</Card.Title>
                  <Card.Text>{service?.serviceDescription}</Card.Text>
                  <Card.Text className="text-danger">
                    {service?.price}
                  </Card.Text>
                  <NavLink to={`/serviceDetails/${service?._id}`}>
                    <Button
                      style={{ backgroundColor: "#ec5990", border: "none" }}
                    >
                      Purchase Now
                    </Button>
                  </NavLink>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AllServices;
