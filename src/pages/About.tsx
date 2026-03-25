import { Heart, Award, Users, Leaf } from 'lucide-react';
import aboutImg from '@/assets/about-shop.jpg';

const highlights = [
  { icon: Heart, title: 'Traditional Recipes', desc: 'Passed down through generations from the Godavari region of Andhra Pradesh.' },
  { icon: Award, title: 'Premium Ingredients', desc: 'Only the finest pure ghee, dry fruits, and natural flavors make it to our kitchen.' },
  { icon: Users, title: 'Custom Orders', desc: 'Personalized sweet boxes for weddings, festivals, and special occasions.' },
  { icon: Leaf, title: 'Fresh & Homemade', desc: 'Every sweet is freshly prepared daily with utmost care and hygiene.' },
];

const About = () => (
  <div className="min-h-screen pt-20">
    {/* Hero */}
    <section className="relative h-80 flex items-center justify-center overflow-hidden">
      <img src={aboutImg} alt="About Sri Ganesh Sweets" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/60" />
      <div className="relative z-10 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-2">About <span className="text-gradient-gold">Us</span></h1>
        <p className="text-primary-foreground/80">The story behind our sweets</p>
      </div>
    </section>

    {/* Story */}
    <section className="section-padding bg-gradient-warm">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-display text-3xl font-bold text-foreground mb-6">Our <span className="text-gradient-gold">Story</span></h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Sri Ganesh Sweets specializes in authentic Andhra sweets, especially the rich and diverse flavors from the Godavari districts. Our passion for traditional sweets began with a simple mission — to bring the homemade taste of Andhra Pradesh to every household.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Every product we make follows time-honored recipes using premium ingredients like pure ghee, fresh milk, the finest dry fruits, and natural sweeteners. From the iconic Kaju Katli and Mysore Pak to the beloved Pootharekulu and Sunnundalu, each sweet carries the authentic flavor of Andhra tradition.
          </p>
        </div>
      </div>
    </section>

    {/* Highlights */}
    <section className="section-padding">
      <div className="container-custom">
        <h2 className="font-display text-3xl font-bold text-foreground text-center mb-12">Why Choose <span className="text-gradient-gold">Us?</span></h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, i) => (
            <div key={i} className="text-center p-6 bg-card rounded-xl shadow-warm hover:shadow-gold transition-all duration-300 hover:-translate-y-1 border border-border">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-gold mb-4">
                <h.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{h.title}</h3>
              <p className="text-sm text-muted-foreground">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
