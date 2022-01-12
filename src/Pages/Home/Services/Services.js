import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Slider from "react-slick";
import Service from "../Service/Service";
import "./Services.css";

function Services() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  var settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    lazyload:true,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="services-container p-5">
      <h4
        style={{
          fontSize: "10vw",
          marginLeft: "6%",
          width: "30%",
          borderBottom: "2px solid #ec5990",
        }}
        className="fs-1 fw-bolder mb-5"
      >
        What We Provide?{" "}
      </h4>
      <Container>
        <Row>
          <Col sx={12} md={12}>
            <Slider {...settings} className="mx-auto fluid ">
              {services.map((service) => (
                <Service
                  className="mx-auto"
                  service={service}
                  key={service._id}
                ></Service>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Services;
