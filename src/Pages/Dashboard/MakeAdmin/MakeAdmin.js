import React from "react";
import "./MakeAdmin.css";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import useAuth from "../../Hooks/useAuth";

const MakeAdmin = () => {
  const { token } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (email) => {
    fetch("https://infinite-thicket-64777.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(email),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          swal("DONE!", "Made Admin Successfully", "success");
        }
        reset();
      });
  };

  return (
    <Container>
      <Row>
        <Col md={12}>
          <div className="makeAdmin-bg">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                autoComplete="off"
                className="my-1"
                placeholder="Write Email to Make Admin"
                {...register("email", { required: true })}
                required
              />
              <button className="addProductSubmit" type="submit">
                Submit
              </button>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MakeAdmin;
