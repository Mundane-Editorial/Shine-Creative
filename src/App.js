import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/Herosection';
import AboutUs from './components/AboutUs/Aboutus';
import Services from './components/Services/Services';
import PharmaGifts from './components/PharmaGifts/Pharmagifts';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' element={<HeroSection />} />
          <Route exact path='/aboutus' element={<AboutUs />} />
          <Route exact path='/services' element={<Services />} />
          <Route exact path='/pharmagifts' element={<PharmaGifts />} />
          <Route exact path='/contact' element={<Contact />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
