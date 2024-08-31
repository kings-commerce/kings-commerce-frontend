import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainLayout from "./userpages/components/mainlayout";
import AdminLayout from "./adminpages/components/adminlayout";
import LandingPage from "./userpages/landing-page";
import Signup from "./userpages/signup-page";
import Login from "./userpages/login-page";
import ContactUs from "./userpages/contact-us-page";
import About from "./userpages/about-us-page";
import ShopProductPage from "./userpages/shop-product-page";
import Checkout from "./userpages/checkout";
import ShopPage from "./userpages/shop-page";
import Dashboard from "./adminpages/dashboard";
import PendingOrdersPage from "./adminpages/pending-orders";
import InProgressPage from "./adminpages/in-progress";
import CompletedDeliveryPage from "./adminpages/completed-delivery";
import SettingsPage from "./adminpages/settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="shop/products" element={<ShopProductPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/dashboard" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route
            path="/dashboard/pending-orders"
            element={<PendingOrdersPage />}
          ></Route>
          <Route
            path="/dashboard/in-progress"
            element={<InProgressPage />}
          ></Route>
          <Route
            path="/dashboard/completed-delivery"
            element={<CompletedDeliveryPage />}
          ></Route>
          <Route path="/dashboard/settings" element={<SettingsPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
