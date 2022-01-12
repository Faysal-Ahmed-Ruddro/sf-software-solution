import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "./Clients.css";

const Clients = () => {
  var settings = {
   dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 3000,
      cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="clients-container">
      <h2  className="text-white text-center fw-bolder">Our Clients</h2>
      <hr className="w-25 text-white mx-auto" />
      <Container>
        <Row>
          <Col className="p-4" xs={12} md={12} lg={12}>
            <Slider {...settings} className="mx-auto ">
              <div className="text-center">
                <img
                  width="50%"
                  src="https://i.ibb.co/tqGBq1G/clients1.png"
                  alt="ClientImage"
                />
              </div>
              <div className="text-center">
                <img
                  width="50%"
                  src="https://i.ibb.co/ZzjDLj9/clients2.png"
                  alt="ClientImage"
                />
              </div>
              <div className="text-center">
                <img
                  width="50%"
                  src="https://i.ibb.co/592tCnd/clients3.png"
                  alt="ClientImage"
                />
              </div>
              <div className="text-center">
                <img
                  width="50%"
                  src="https://i.ibb.co/tqGBq1G/clients1.png"
                  alt="ClientImage"
                />
              </div>
              <div className="text-center">
                <img
                  width="50%"
                  src="https://i.ibb.co/ZzjDLj9/clients2.png"
                  alt="ClientImage"
                />
              </div>
              <div className="text-center">
                <img
                  width="50%"
                  src="https://i.ibb.co/592tCnd/clients3.png"
                  alt="ClientImage"
                />
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Clients;

// https://i.ibb.co/tqGBq1G/clients1.png
// https://i.ibb.co/ZzjDLj9/clients2.png
// https://i.ibb.co/592tCnd/clients3.png
/* 
<div>
                <img
                  width="50%"
                  src="https://i.ibb.co/tqGBq1G/clients1.png"
                  alt="ClientImage"
                />
              </div>
              <div>
                <img
                  width="50%"
                  src="https://i.ibb.co/ZzjDLj9/clients2.png"
                  alt="ClientImage"
                />
              </div>
              <div>
                <img
                  width="50%"
                  src="https://i.ibb.co/592tCnd/clients3.png"
                  alt="ClientImage"
                />
              </div>
              <div>
                <img
                  width="50%"
                  src="https://i.ibb.co/tqGBq1G/clients1.png"
                  alt="ClientImage"
                />
              </div>
              <div>
                <img
                  width="50%"
                  src="https://i.ibb.co/ZzjDLj9/clients2.png"
                  alt="ClientImage"
                />
              </div>
              <div>
                <img
                  width="50%"
                  src="https://i.ibb.co/592tCnd/clients3.png"
                  alt="ClientImage"
                />
              </div>
*/
