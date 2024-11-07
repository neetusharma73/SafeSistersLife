import './App.css';
import About from './components/About';
import Awareness from './components/Awareness';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Need from './components/Need';

function App() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Awareness/>
      <Need/>
      <Footer/>
    </>
  );
}

export default App;
