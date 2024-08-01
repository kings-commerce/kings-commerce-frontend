import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainLayout from "./userpages/components/mainlayout";
import LandingPage from "./userpages/landing-page";
import Signup from "./userpages/signup-page";
import Login from "./userpages/login-page";
import ContactUs from "./userpages/contact-us-page";
import About from "./userpages/about-us-page";
import ShopPage from "./userpages/ShopPage";
import Checkout from "./userpages/checkout";

import ShopOne from "./userpages/shop-one";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/shop-one" element={<ShopOne />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
