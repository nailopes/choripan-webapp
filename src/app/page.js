import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ImageCarousel from './components/ImageCarousel';
import ContactForm from './components/ContactForm';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ImageCarousel />
      {/* <ContactForm /> */}
    </main>
  );
}