import DemoBanner from '@/components/DemoBanner';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import MenuSection from '@/components/MenuSection';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import PosPitch from '@/components/PosPitch';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <DemoBanner />
      <Navbar />
      <Hero />
      <About />
      <MenuSection />
      <Gallery />
      <Reviews />
      <Contact />
      <PosPitch />
      <Footer />
    </main>
  );
}
