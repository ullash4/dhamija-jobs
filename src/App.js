import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home';
import Jobs from './Components/Pages/Jobs';
import Footer from './Components/Shared/Footer';
import Navbar from './Components/Shared/Navbar';
import NotFoundPage from './Components/Shared/NotFoundPage';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/findjobs' element={<Jobs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
