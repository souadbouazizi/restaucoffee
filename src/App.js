import './App.css';
import { Routes, Route } from 'react-router-dom';
import Carousel from './components/Carousel'; // Assure-toi que ce chemin est correct
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import { NavBar } from './components/NavBar'; // Assure-toi que ce chemin est 
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavBar /> {/* Utilise le nom du composant correctement */}

      {/* Appel du composant Carousel */}
      <Carousel />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
