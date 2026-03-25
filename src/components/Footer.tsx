import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowUp } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Sri Ganesh Sweets" className="h-12 w-auto brightness-200" />
              <span className="font-display text-lg font-bold">Sri Ganesh Sweets</span>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">Authentic Andhra sweets & snacks from the heart of Godavari. Freshly made with premium ingredients and traditional recipes.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[{ to: '/', l: 'Home' }, { to: '/about', l: 'About Us' }, { to: '/products', l: 'Our Products' }, { to: '/cart', l: 'Cart' }, { to: '/contact', l: 'Contact' }].map(item => (
                <li key={item.to}>
                  <Link to={item.to} onClick={scrollToTop} className="text-sm opacity-80 hover:opacity-100 transition-opacity hover:underline">{item.l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              {['Hot Items & Snacks', 'Traditional Sweets', 'Dry Fruit Specials', 'Festival Specials', 'Custom Orders'].map(c => (
                <li key={c}>
                  <Link to="/products" onClick={scrollToTop} className="text-sm opacity-80 hover:opacity-100 transition-opacity hover:underline">{c}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" /> 9494244949</li>
              <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0" /> info.ganeshsweets@gmail.com</li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> 3-64/2 116, MMTS Station Road, Chanda Nagar, Hyderabad 500050</li>
              <li className="flex items-start gap-2"><Clock className="h-4 w-4 mt-0.5 shrink-0" /> 9 AM – 10 PM (Mon–Sun)</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-secondary-foreground/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-60">© {new Date().getFullYear()} Sri Ganesh Sweets. All rights reserved.</p>
          <button onClick={scrollToTop} className="flex items-center gap-2 text-sm opacity-60 hover:opacity-100 transition-opacity">
            <ArrowUp className="h-4 w-4" /> Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
