import React from 'react';
import "./SingleMember.css"
import { Card, Col,Container } from "react-bootstrap";

const SingleMember = ({teamMember}) => {
    const { memberName, memberDescription, photoUrl } = teamMember;
    return (
      <Col
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="2000"
        sx={12}
        md={6}
        lg={3}
      >
        <Container>
          <Card
            className="border-0"
            style={{
              width: "250px",
              margin: "10px auto",
              boxShadow: ".4px .2px 10px",
            }}
          >
            <Card.Img style={{borderRadius:"50%",width:"80%", padding:"5px",margin:"0 auto"}} variant="top" src={photoUrl} />
            <Card.Body>
              <Card.Title className="text-center">{memberName}</Card.Title>
              <Card.Text className="text-center">{memberDescription}</Card.Text>
              <div className="text-center">
                <i className="fab fa-facebook-square m-2"></i>
                <i className="fab fa-instagram-square m-2"></i>
                <i className="fab fa-twitter-square m-2"></i>
                <i className="fab fa-linkedin-in m-2"></i>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </Col>
    );
};

export default SingleMember;