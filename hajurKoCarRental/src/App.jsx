import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import SignUp from "./components/authentication/Signup";
import SignIn from "./components/authentication/SignIn";
import ForgotPassword from "./components/authentication/ForgotPassword";
import CarForm from "./components/CarForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/add-car" element={<CarForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
