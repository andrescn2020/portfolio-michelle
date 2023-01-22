import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Hero2 from './components/Hero2/Hero2';
import SectionPage from './components/SectionPage/SectionPage';
import Carrusel from './components/Carrusel/Carrusel';
import Separator from './components/Separator/Separator';
import Aboutme from './components/Aboutme/Aboutme';
import Clients from './components/Clients/Clients';
import Services from './components/Services/Services';
import Separation2 from './components/Separation2/Separation2';
import Testimonials from './components/Testimonials/Testimonials';
import Captive from './components/Captive/Captive';
import Journal from './components/Journal/Journal';
import './App.css';

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Hero2 />
      <SectionPage />
      <Carrusel />
      <Separator />
      <Aboutme />
      <Clients />
      <Services />
      <Separation2 />
      <Testimonials /> 
      <Captive />
      <Journal />
    </div>
  )
}

export default App
