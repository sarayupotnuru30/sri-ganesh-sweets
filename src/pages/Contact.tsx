import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import patternBg from '@/assets/pattern-bg.jpg';

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(`Hi, I'm ${form.name}.\nPhone: ${form.phone}\n\n${form.message}`);
    window.open(`https://wa.me/919494244949?text=${msg}`, '_blank');
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <img src={patternBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="relative z-10 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-2">Contact <span className="text-gradient-gold">Us</span></h1>
          <p className="text-primary-foreground/80">We'd love to hear from you</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="animate-fade-in">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Send us a <span className="text-gradient-gold">Message</span></h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" placeholder="Your Name" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                <input type="tel" placeholder="Phone Number" required value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
                <textarea placeholder="Your Message" rows={5} required value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
                <button type="submit" className="w-full bg-gradient-gold text-primary-foreground py-3.5 rounded-lg font-bold hover:shadow-gold transition-all flex items-center justify-center gap-2">
                  <Send className="h-4 w-4" /> Send via WhatsApp
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Get in <span className="text-gradient-gold">Touch</span></h2>
              <div className="space-y-4">
                {[
                  { icon: Phone, label: 'Phone', value: '9494244949', href: 'tel:9494244949' },
                  { icon: Mail, label: 'Email', value: 'info.ganeshsweets@gmail.com', href: 'mailto:info.ganeshsweets@gmail.com' },
                  { icon: MapPin, label: 'Address', value: '3-64/2 116, MMTS Station Road, near old Police Station, Gangaram, Chanda Nagar, Hyderabad, Telangana 500050' },
                  { icon: Clock, label: 'Hours', value: '9 AM – 10 PM (Monday–Sunday)' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-warm">
                    <div className="p-3 rounded-full bg-gradient-gold shrink-0">
                      <item.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-sm text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden border border-border shadow-warm h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2!2d78.3196!3d17.4933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI5JzM2LjAiTiA3OMKwMTknMTAuNiJF!5e0!3m2!1sen!2sin!4v1"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Sri Ganesh Sweets Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
