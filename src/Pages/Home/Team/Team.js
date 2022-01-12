import React from "react";
import {  Col, Container, Row, } from "react-bootstrap";
import SingleMember from "../SingleMember/SingleMember";
import "./Team.css"
function Team() {
  const teamMembers = [
    {
      key: 16546515,
      memberName: "Ibrahim Abo Seada",
      memberDescription: "Web Developer",
      photoUrl: "https://i.ibb.co/HB61h52/instructor-1.jpg",
    },
    {
      key: 52844123,
      memberName: "Mahmoud Begha",
      memberDescription: "UI Designer",
      photoUrl: "https://i.ibb.co/4gvb8G8/instructor-avatar-2.jpg",
    },
    {
      key: 78984515,
      memberName: "Naity Mohamed",
      memberDescription: "Backend Developer",
      photoUrl: "https://i.ibb.co/v4VqjS4/instructor-avatar-3.jpg",
    },
    {
      key: 78984514,
      memberName: "Salah Elimam",
      memberDescription:"CEO ",
      photoUrl: "https://i.ibb.co/tXVCqt3/instructor-avatar-4.jpgz ",
    },
  ];
  return (
    <Container className="py-5">
      <div>
        <h2
          style={{ marginLeft: "6%", borderBottom: "2px solid red" }}
          className="fs-1 fw-bolder w-25 mb-5"
        >
          Meet Our Team
        </h2>
        <p style={{ marginLeft: "6%", marginTop:"-2%"}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel culpa
          perspiciatis consectetur maiores.
        </p>
      </div>
      <Row className="mx-auto">
        <Col sx={12} md={12} lg={12}>
          <div>
            <Row>
              {teamMembers.map((teamMember) => (
                <SingleMember
                  key={teamMember?.key}
                  teamMember={teamMember}
                ></SingleMember>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Team;
