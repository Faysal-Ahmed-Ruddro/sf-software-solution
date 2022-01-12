import React from "react";
import "./Banner.css";
import { Col, Container, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Banner = () => {
  return (
    <div className="banner-container">
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col
            xs={{ span: 12, order: 2 }}
            md={{ span: 5, order: 1 }}
            lg={{ span: 5, order: 1 }}
          >
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="mx-auto"
              data-aos-duration="2000"
            >
              <h2 className="banner-title">
                {" "}
                <span
                  style={{
                    backgroundColor: "rgba(61, 61, 61, 0.377)",
                    padding: "5px",
                    color: "#fff",
                  }}
                >
                  NEED
                </span>{" "}
                <span>WEBSITE</span> <br />
                <span>FOR YOUR BUSINESS</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                deserunt, modi pariatur iusto quaerat voluptates perspiciatis
                iste eius tenetur hic facilis nam nostrum harum sequi
                repellendus ab fuga. Nisi, aliquid.
              </p>
              <button className="btn btn-outline-info">Buy Now</button>
            </div>
          </Col>
          <Col
            xs={{ span: 12, order: 1 }}
            md={{ span: 7, order: 2 }}
            lg={{ span: 7, order: 2 }}
          >
            <div
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="2000"
              className="py-5"
            >
              <img
                width="100%"
                src="https://i.ibb.co/7QZWfK2/10168.png"
                alt="Images"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
