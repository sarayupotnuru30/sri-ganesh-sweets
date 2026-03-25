import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import logo from '@/assets/logo.png';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-warm border-b border-border">
      <div className="container-custom flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Sri Ganesh Sweets" className="h-10 md:h-14 w-auto" />
          <span className="font-display text-lg md:text-xl font-bold text-foreground hidden sm:block">Sri Ganesh Sweets</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(l => (
            <Link
              key={l.to} to={l.to}
              className={`font-body text-sm font-medium transition-colors hover:text-primary ${location.pathname === l.to ? 'text-primary border-b-2 border-primary pb-1' : 'text-muted-foreground'}`}
            >{l.label}</Link>
          ))}
          <Link to="/cart" className="relative p-2 rounded-full hover:bg-muted transition-colors">
            <ShoppingCart className="h-5 w-5 text-foreground" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">{totalItems}</span>
            )}
          </Link>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <Link to="/cart" className="relative p-2">
            <ShoppingCart className="h-5 w-5 text-foreground" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">{totalItems}</span>
            )}
          </Link>
          <button onClick={() => setOpen(!open)} className="p-2">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-card border-t border-border animate-fade-in">
          {navLinks.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)}
              className={`block px-6 py-3 font-body text-sm font-medium border-b border-border transition-colors ${location.pathname === l.to ? 'text-primary bg-muted' : 'text-foreground'}`}
            >{l.label}</Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
