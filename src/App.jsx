import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Methodology from './components/Methodology';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-grow">
        <Hero />
        <Services />
        <CaseStudies />
        <Methodology />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}