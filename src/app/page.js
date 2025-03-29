import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ImageCarousel from './components/ImageCarousel';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ImageCarousel />
      <ContactForm />
      <Footer />
    </main>
  );
}