import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./pages/Home/Home";
import WhoWeAre from "./pages/Who we are/WhoWeAre";
import Faq from "./pages/Faq/Faq";
import ForexExpro from "./pages/Forex Expo Dubai/ForexExpo";
import ContactUS from "./pages/Contact Us/ContactUS";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div className="bg-[#06080e]">
        <NavBar />
        <div className="mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/faqs" element={<Faq />} />
            <Route path="/contact-us" element={<ContactUS />} />
            <Route path="/forex-expo" element={<ForexExpro />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
