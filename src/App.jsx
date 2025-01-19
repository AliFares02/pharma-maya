import "./App.css";
import NavHeader from "./NavHeader";
import Home from "./pages/Home";
import About from "./pages/About";
import MedicationsAndSupplies from "./pages/MedicationsAndSupplies";
import AcceptedInsurance from "./pages/AcceptedInsurance";
import Footer from "./pages/Footer";
import Gallery from "./pages/Gallery";
import Tagline from "./pages/Tagline";

function App() {
  return (
    <div className="app-container">
      <NavHeader />
      <Home />
      <Tagline />
      <About />
      <Gallery />
      <MedicationsAndSupplies />
      <AcceptedInsurance />
      <Footer />
    </div>
  );
}

export default App;
