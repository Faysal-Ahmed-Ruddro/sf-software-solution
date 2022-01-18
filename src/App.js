import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Pages/Shared/Footer/Footer";
import ServiceDetails from "./Pages/Home/ServiceDetails/ServiceDetails";
import Regester from "./Pages/Login/Regester/Regester";
import Login from "./Pages/Login/Login/Login";
import Header from "./Pages/Shared/Header/Header";
import Authprovider from "./Pages/Context/Authprovider";
import AllServices from "./Pages/AllServices/AllServices";
import AddService from "./Pages/Dashboard/AddService/AddService";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import AdminRoute from "./Pages/AdminRoute/AdminRoute";

function App() {
  return (
    <div className="App">
      <Authprovider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="allServices"
              element={
                <PrivateRoute>
                  <AllServices />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route
                path="addService"
                element={
                  <AdminRoute>
                    <AddService />
                  </AdminRoute>
                }
              />
              <Route path="myOrders" element={<MyOrders />} />
              <Route
                path="makeAdmin"
                element={
                  <AdminRoute>
                    <MakeAdmin />
                  </AdminRoute>
                }
              />
            </Route>
            <Route path="/serviceDetails/:_id" element={<ServiceDetails />} />
            <Route path="/regester" element={<Regester />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Authprovider>
    </div>
  );
}

export default App;
