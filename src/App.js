import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainLayout from "./userpages/components/Mainlayout";
import LandingPage from "./userpages/landing-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="landing" element={<LandingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
