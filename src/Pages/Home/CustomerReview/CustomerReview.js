import React from "react";
import "./CustomerReview.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import Silder from "react-slick";

const reviews = [
  {
    id: 2004,
    name: "Jane Froster",
    img: "https://i.ibb.co/KGsMZpS/Jane.jpg",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum sequi omnis cupiditate tempore vel accusamus.",
  },
  {
    id: 2005,
    name: "Smith H.",
    img: "https://i.ibb.co/DC76knz/Smith.jpg",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum sequi omnis cupiditate tempore vel accusamus.",
  },
  {
    id: 2006,
    name: "Fiona Luis",
    img: "https://i.ibb.co/QvMtktb/alexa.jpg",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum sequi omnis cupiditate tempore vel accusamus.",
  },
];
  
const CustomerReview = () => {
    const settings = {
      dots: true,
      arrows:false,
      slidesToShow: 1,
      slidesToScroll: 1
    };

  return (
    <div className="text-center  review-bg py-4">
      <h2 className="my-2 fw-bolder">What Our Client's Say?</h2>
      <Container>
        <Row>
          <Col className="py-5" xs={12} md={12} lg={12}>
            <Silder {...settings} className="w-75 mx-auto">
              {reviews.map((review) => (
                <div key={review?.id}>
                  <Card
                    style={{
                      width: "100%",
                      margin: "0 auto",
                      background: "transparent",
                      border: "none",
                    }}
                  >
                    <Card.Img
                      style={{ width: "25%", borderRadius: "50px" }}
                      className="mx-auto"
                      variant="top"
                      src={review?.img}
                    />
                    <Card.Body>
                      <Card.Title className="text-center fs-4">
                        {review?.name}
                      </Card.Title>
                      <p className="text-center text-secondary fs-3">{review?.review}</p>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </Silder>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CustomerReview;
