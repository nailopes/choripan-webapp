import { Inter } from 'next/font/google';
import Navbar from './components/NavBar';
import './globals.css';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Choripan - The Best Sandwich in the World',
  description: 'Discover the authentic taste of Choripan, a legendary South American street food that combines perfectly grilled chorizo with crusty bread.',
  openGraph: {
    title: 'Choripan - Authentic South American Street Food',
    description: 'Experience the ultimate sandwich that captures the heart of South American cuisine.',
    images: [{ url: '/images/hero-background.jpg' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Choripan - The Best Sandwich',
    description: 'Taste the legend of South American street food.',
    images: ['/images/hero-background.jpg'],
  },
  keywords: ['choripan', 'sandwich', 'south american food', 'street food', 'argentina'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}