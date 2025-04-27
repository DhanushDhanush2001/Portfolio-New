import './index.css';

import Navbar from './components/Navbar'
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Education from './components/Education';
import Projects from './components/Projects';


function App() {
  

  return (
   
       <div className="bg-slate-50 text-gray-800">
          <Navbar/>
          <main>               
          <Hero/>
          <About/>
          <Skills/>
          <Projects/>
          <Education/>
          <Contact/>
          </main>
          <Footer/>
        </div>
  );
}

export default App
