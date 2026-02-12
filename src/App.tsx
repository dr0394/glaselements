import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import About from './components/About';
import Products from './components/Products';
import Windows from './components/Windows';
import Doors from './components/Doors';
import Systems from './components/Systems';
import Roofing from './components/Roofing';
import Advantages from './components/Advantages';
import References from './components/References';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CookieBanner from './components/CookieBanner';
import MultistepForm from './components/MultistepForm';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPage === 'impressum') {
    return <Impressum onNavigate={handleNavigate} />;
  }

  if (currentPage === 'datenschutz') {
    return <Datenschutz onNavigate={handleNavigate} />;
  }

  if (currentPage === 'agb') {
    return (
      <div className="min-h-screen bg-glaswerk-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-2 text-anthrazit hover:text-stahlblau transition-colors mb-8"
          >
            Zurück zur Startseite
          </button>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-anthrazit">
            Allgemeine Geschäftsbedingungen
          </h1>
          <p className="text-anthrazit/70">
            Die AGB werden in Kürze hier veröffentlicht.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-anthrazit smooth-scroll">
      <Header onOpenForm={() => setIsFormOpen(true)} />
      <main>
        <Hero onOpenForm={() => setIsFormOpen(true)} />
        <ProblemSolution onOpenForm={() => setIsFormOpen(true)} />
        <Roofing onOpenForm={() => setIsFormOpen(true)} />
        <Products />
        <Windows onOpenForm={() => setIsFormOpen(true)} />
        <Doors onOpenForm={() => setIsFormOpen(true)} />
        <Systems onOpenForm={() => setIsFormOpen(true)} />
        <About />
        <Advantages />
        <References />
        <Process onOpenForm={() => setIsFormOpen(true)} />
        <Contact />
      </main>
      <Footer onNavigate={handleNavigate} />
      <WhatsAppButton />
      <CookieBanner />
      <MultistepForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
}

export default App;
