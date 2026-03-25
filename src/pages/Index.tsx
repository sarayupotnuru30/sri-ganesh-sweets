import { Link } from 'react-router-dom';
import { Star, Truck, ShieldCheck, Gift } from 'lucide-react';
import heroImg from '@/assets/hero-sweets.jpg';
import sweetsImg from '@/assets/products/sweets.jpg';
import hotItemsImg from '@/assets/products/hot-items.jpg';

const features = [
  { icon: Star, title: 'Premium Quality', desc: 'Made with finest ingredients & pure ghee' },
  { icon: Truck, title: 'Fresh Daily', desc: 'Prepared fresh every morning' },
  { icon: ShieldCheck, title: '100% Hygienic', desc: 'Clean & safe preparation' },
  { icon: Gift, title: 'Custom Orders', desc: 'Special packing for events & festivals' },
];

const Index = () => (
  <div className="min-h-screen">
    {/* Hero */}
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <img src={heroImg} alt="Sri Ganesh Sweets" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
      <div className="relative z-10 text-center px-4 max-w-3xl animate-fade-in">
        <p className="text-gold-light font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4">Authentic Andhra Sweets & Snacks</p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Sri Ganesh <span className="text-gradient-gold">Sweets</span>
        </h1>
        <p className="text-primary-foreground/80 font-body text-base md:text-lg mb-8 max-w-xl mx-auto">
          Traditional flavors from the Godavari districts, crafted with love and premium ingredients since generations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/products" className="bg-gradient-gold text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:shadow-gold transition-all duration-300 hover:-translate-y-0.5">
            Explore Our Menu
          </Link>
          <Link to="/contact" className="border-2 border-primary-foreground/40 text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-all">
            Contact Us
          </Link>
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="section-padding bg-gradient-warm">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="text-center p-6 bg-card rounded-xl shadow-warm hover:shadow-gold transition-all duration-300 hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-gold mb-4">
                <f.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-sm md:text-base font-semibold text-foreground mb-1">{f.title}</h3>
              <p className="text-xs text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Categories */}
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Our <span className="text-gradient-gold">Specialties</span></h2>
          <p className="text-muted-foreground max-w-lg mx-auto">From crispy savory snacks to melt-in-mouth sweets, discover our wide range of authentic Andhra delicacies.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { img: hotItemsImg, title: '🔥 Hot Items & Snacks', desc: '17+ crispy, spicy, and savory treats', cat: 'hot-items' },
            { img: sweetsImg, title: '🍬 Traditional Sweets', desc: '39+ authentic sweets from Godavari', cat: 'sweets' },
          ].map(c => (
            <Link key={c.cat} to={`/products?category=${c.cat}`} className="group relative rounded-2xl overflow-hidden h-72 block shadow-warm hover:shadow-gold transition-all">
              <img src={c.img} alt={c.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-display text-2xl font-bold text-primary-foreground mb-1">{c.title}</h3>
                <p className="text-primary-foreground/70 text-sm">{c.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-gradient-maroon text-center">
      <div className="container-custom">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">Order Your Favorites Today!</h2>
        <p className="text-secondary-foreground/80 mb-8 max-w-lg mx-auto">Browse our full menu, add items to cart, and place your order via WhatsApp. We deliver fresh sweets right to your doorstep!</p>
        <Link to="/products" className="inline-block bg-gradient-gold text-primary-foreground px-10 py-4 rounded-lg font-bold hover:shadow-gold transition-all hover:-translate-y-0.5">
          View Full Menu
        </Link>
      </div>
    </section>
  </div>
);

export default Index;
