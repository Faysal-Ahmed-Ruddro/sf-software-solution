import React from "react";
import Banner from "../Banner/Banner";
import CustomerReview from "../CustomerReview/CustomerReview";
import Clients from "../OurClients/Clients";
import Services from "../Services/Services";
import Team from "../Team/Team";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Clients />
      <Team />
      <CustomerReview/>
    </div>
  );
};

export default Home;
