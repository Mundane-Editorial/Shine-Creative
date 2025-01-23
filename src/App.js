import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/Herosection';
import AboutUs from './components/AboutUs/Aboutus';
import Services from './components/Services/Services';
import PharmaGifts from './components/PharmaGifts/Pharmagifts';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

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
