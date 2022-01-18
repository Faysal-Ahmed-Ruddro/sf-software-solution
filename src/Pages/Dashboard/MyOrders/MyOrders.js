import React, { useEffect, useState } from "react";
import "./MyOrder.css";
import { Table } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState([]);
  useEffect(() => {
    const url = `https://infinite-thicket-64777.herokuapp.com/orders?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, []);

  return (
    <div>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Phone</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        {myOrders?.map((order) => (
          <tbody key={order?._id}>
            <tr>
              <td className="text-secondary">{order?.serviceName}</td>
              <td className="text-secondary">{order?.phone}</td>
              <td className="text-secondary">{order?.price}</td>
              <td>
                <button className="cancel-btn">Cancel</button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default MyOrders;
