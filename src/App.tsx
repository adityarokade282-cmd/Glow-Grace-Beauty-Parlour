import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Bridal from '@/components/Bridal';
import Gallery from '@/components/Gallery';
import Offers from '@/components/Offers';
import Testimonials from '@/components/Testimonials';
import BookingForm from '@/components/BookingForm';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Bridal />
        <Gallery />
        <Offers />
        <Testimonials />
        <BookingForm />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
