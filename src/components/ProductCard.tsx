import { useState } from 'react';
import { ShoppingCart, Check } from 'lucide-react';
import type { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import hotItemsImg from '@/assets/products/hot-items.jpg';
import sweetsImg from '@/assets/products/sweets.jpg';

const ProductCard = ({ product }: { product: Product }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const imgSrc = product.category === 'hot-items' ? hotItemsImg : sweetsImg;

  const handleAdd = () => {
    addToCart(product, product.prices[selectedIdx]);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-warm hover:shadow-gold transition-all duration-300 hover:-translate-y-1 border border-border">
      <div className="relative overflow-hidden h-48">
        <img src={imgSrc} alt={product.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <span className="absolute top-3 left-3 bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full">
          {product.category === 'hot-items' ? '🔥 Hot Item' : '🍬 Sweet'}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-display text-lg font-semibold text-foreground mb-1">{product.name}</h3>
        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{product.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {product.prices.map((p, i) => (
            <button key={p.label} onClick={() => setSelectedIdx(i)}
              className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${i === selectedIdx ? 'bg-primary text-primary-foreground border-primary' : 'border-border text-muted-foreground hover:border-primary'}`}
            >{p.label} – ₹{p.price}</button>
          ))}
        </div>

        <button onClick={handleAdd}
          className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${added ? 'bg-green-600 text-primary-foreground' : 'bg-gradient-gold text-primary-foreground hover:shadow-gold'}`}
        >
          {added ? <><Check className="h-4 w-4" /> Added!</> : <><ShoppingCart className="h-4 w-4" /> Add to Cart</>}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
