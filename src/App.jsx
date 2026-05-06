import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-[#f97316] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
