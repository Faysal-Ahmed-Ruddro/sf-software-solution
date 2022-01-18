import React from 'react';
import { Card, Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

const Service = ({service}) => {
    return (
      <Card className="mx-auto" style={{ width: "80%"}}>
        <div data-aos="fade-in-left" style={{ margin: "20px" }}>
          <Card.Img
            style={{ borderRadius: "20px" }}
            variant="top"
            width="100%"
            height="200px"
            src={service?.photoUrl}
          />
          <Card.Body style={{ backgroundColor: "#fff" }}>
            <h4 className="fw-bolder">{service?.serviceName}</h4>
            <p className="text-secondary">{service?.serviceDescription}</p>
            <Card.Text className="text-danger fw-bolder">
              {service?.price}
            </Card.Text>
            <NavLink to={`/serviceDetails/${service?._id}`}>
              <Button style={{ backgroundColor: "#ec5990", border: "none" }}>
                Purchase Now
              </Button>
            </NavLink>
          </Card.Body>
        </div>
      </Card>
    );
};

export default Service;