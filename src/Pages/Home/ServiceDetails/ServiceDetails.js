import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../../Hooks/useAuth";
import "./ServiceDetails.css";

const ServiceDetails = () => {

  const { _id } = useParams();
  const [service, setService] = useState([]);
  const { user } = useAuth();

   const initialInfo = {
     userName: user.displayName,
     email: user.email,
     phone: "",
     address: " ",
   };
   const [orderInfo, setOrderInfo] = useState(initialInfo);

  useEffect(() => {
    fetch(`http://localhost:8000/services/${_id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);


  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...orderInfo };
    newInfo[field] = value;
    setOrderInfo(newInfo);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
     const orders = {
       ...orderInfo,
       serviceName: service?.serviceName,
       price: service?.price,
     };
    //  send to the server 
     fetch("http://localhost:8000/orders", {
       method: "POST",
       headers: { "content-type": "application/json" },
       body: JSON.stringify(orders),
     })
       .then((res) => res.json())
       .then((data) => {
         if (data?.acknowledged === true) {
           swal({
             text: "Your Order is Done",
             icon: "success",
           });
         }
       });
  };

  return (
    <div className="details-bg">
      <Container>
        <Row className="details-row d-flex align-items-center">
          <Col className="my-2 py-4" xs={12} md={6} lg={6}>
            <Card
              className="border mx-auto"
              style={{
                width: "18rem",
                height: "100%",
                backgroundColor: "transparent",
              }}
            >
              <Card.Img
                style={{ width: "100%", margin: "0 auto" }}
                variant="bottom"
                src={service?.photoUrl}
              />
              <Card.Body style={{ backgroundColor: "#fff" }} className="">
                <Card.Title className="text-black">
                  {service?.serviceName}
                </Card.Title>
                <Card.Title className="text-danger">
                  {service?.price}
                </Card.Title>
                <Card.Text className="text-black">
                  This is {service?.serviceDescription}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <form onSubmit={handleOnSubmit}>
              <input
                type="text"
                name="userName"
                onBlur={handleOnBlur}
                placeholder="Full Name"
                defaultValue={user?.displayName}
                autoComplete="off"
                required
              />
              <input
                type="email"
                name="email"
                onBlur={handleOnBlur}
                defaultValue={user?.email}
                placeholder="Email"
                autoComplete="off"
                required
              />
              <input
                type="text"
                name="address"
                onBlur={handleOnBlur}
                placeholder="Address"
                autoComplete="off"
                required
              />
              <input
                type="number"
                name="phone"
                onBlur={handleOnBlur}
                placeholder="Phone Number"
                autoComplete="off"
                required
              />
              <button type="submit">Place Your Order</button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServiceDetails;
