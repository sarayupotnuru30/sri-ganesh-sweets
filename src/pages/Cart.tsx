import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  const buildWhatsAppMessage = () => {
    let msg = '🙏 *Order from Sri Ganesh Sweets*\n\n';
    items.forEach(i => {
      msg += `• ${i.product.name} (${i.selectedPrice.label}) x${i.quantity} — ₹${i.selectedPrice.price * i.quantity}\n`;
    });
    msg += `\n💰 *Total: ₹${totalPrice}*\n\nPlease confirm my order. Thank you!`;
    return encodeURIComponent(msg);
  };

  const handleCheckout = () => {
    window.open(`https://wa.me/919494244949?text=${buildWhatsAppMessage()}`, '_blank');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <ShoppingBag className="h-20 w-20 text-muted-foreground/30 mx-auto mb-6" />
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">Add some delicious sweets to get started!</p>
          <Link to="/products" className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:shadow-gold transition-all">
            <ArrowLeft className="h-4 w-4" /> Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">Your <span className="text-gradient-gold">Cart</span></h1>

          <div className="space-y-4 mb-8">
            {items.map(item => (
              <div key={`${item.product.id}-${item.selectedPrice.label}`} className="flex items-center gap-4 bg-card p-4 rounded-xl border border-border shadow-warm">
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-base font-semibold text-foreground truncate">{item.product.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.selectedPrice.label} — ₹{item.selectedPrice.price} each</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => updateQuantity(item.product.id, item.selectedPrice.label, item.quantity - 1)} className="p-1.5 rounded-lg bg-muted hover:bg-primary/10 transition-colors">
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center font-semibold">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.product.id, item.selectedPrice.label, item.quantity + 1)} className="p-1.5 rounded-lg bg-muted hover:bg-primary/10 transition-colors">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <p className="font-semibold text-foreground w-20 text-right">₹{item.selectedPrice.price * item.quantity}</p>
                <button onClick={() => removeFromCart(item.product.id, item.selectedPrice.label)} className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="bg-card p-6 rounded-xl border border-border shadow-warm">
            <div className="flex justify-between items-center mb-6">
              <span className="font-display text-xl font-bold text-foreground">Total</span>
              <span className="font-display text-2xl font-bold text-gradient-gold">₹{totalPrice}</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={handleCheckout} className="flex-1 bg-green-600 text-primary-foreground py-3.5 rounded-lg font-bold hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
                Order via WhatsApp
              </button>
              <button onClick={clearCart} className="px-6 py-3.5 rounded-lg border border-border text-muted-foreground font-medium hover:bg-muted transition-colors">
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
