import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ImageCarousel from './components/ImageCarousel';
import ContactForm from './components/ContactForm';
import ScrollToTopButton from './components/ScrollToTopButton';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ImageCarousel id="gallery" />
      {/* <ContactForm /> */}
      <ScrollToTopButton />
    </main>
  );
}