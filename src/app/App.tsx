import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CakesPage } from './pages/CakesPage';
import { ProductsPage } from './pages/ProductsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { GalleryPage } from './pages/GalleryPage';
import { BlogPage } from './pages/BlogPage';

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  useEffect(() => {
    let scrolled = 0;
    const progressBar = document.querySelector('.progress-bar') as HTMLElement;
    const updateProgress = () => {
      scrolled = window.pageYOffset;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = scrolled / maxScroll;
      if (progressBar) progressBar.style.transform = `scaleX(${scrollPercent})`;
    };
    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  // WhatsApp phone number (replace with actual number)
  const whatsappNumber = '919876543210'; // Portfolio demo WhatsApp number
  
  // Function to open WhatsApp with pre-filled message
  const openWhatsApp = (itemName?: string, itemPrice?: string) => {
    let message = itemName 
      ? `Hi! I'm interested in ordering the *${itemName}*${itemPrice ? ` (${itemPrice})` : ''}. Could you please provide more details?`
      : `Hi! I'd like to know more about your products and place an order.`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-organic-cream flex flex-col relative">
        {/* Scroll Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 bg-gradient-gold-organic z-50 origin-left scale-x-0 progress-bar" style={{ transformOrigin: 'left' }} />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onWhatsAppClick={() => openWhatsApp()} />} />
            <Route path="/cakes" element={<CakesPage onOrder={openWhatsApp} />} />
            <Route path="/products" element={<ProductsPage onOrder={openWhatsApp} />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage onWhatsAppClick={() => openWhatsApp()} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}