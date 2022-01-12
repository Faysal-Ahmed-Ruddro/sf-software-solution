import { Route } from 'react-router-dom';
import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './Pages/Shared/Footer/Footer';
import ServiceDetails from './Pages/Home/ServiceDetails/ServiceDetails';
import Regester from './Pages/Login/Regester/Regester';
import Login from "./Pages/Login/Login/Login"
import Header from './Pages/Shared/Header/Header';
import Authprovider from './Pages/Context/Authprovider';
import AllServices from './Pages/AllServices/AllServices';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import AddService from './Pages/Dashboard/AddService/AddService';

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
            <Route path="/dashboard" element={<AddService />} />
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
