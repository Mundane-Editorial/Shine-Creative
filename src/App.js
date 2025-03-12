import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import HeroSection from './components/HeroSection/Herosection.js';
import AboutUs from './components/AboutUs/Aboutus.js';
import Services from './components/Services/Services.js';
import PharmaGifts from './components/PharmaGifts/Pharmagifts.js';
import Contact from './components/Contact/Contact.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Services />
      <PharmaGifts />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
