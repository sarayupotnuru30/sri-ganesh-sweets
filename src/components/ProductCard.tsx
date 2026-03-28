import { useState } from 'react';
import { ShoppingCart, Check, ChevronDown } from 'lucide-react';
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
      {/* Image Section */}
      <div className="relative overflow-hidden h-48">
        <img 
          src={imgSrc} 
          alt={product.name} 
          loading="lazy" 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
        />
        <span className="absolute top-3 left-3 bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full">
          {product.category === 'hot-items' ? '🔥 Hot Item' : '🍬 Sweet'}
        </span>
      </div>

      <div className="p-4">
        {/* Title and Description */}
        <h3 className="font-display text-lg font-semibold text-foreground mb-1">{product.name}</h3>
        <p className="text-xs text-muted-foreground mb-4 line-clamp-1">{product.description}</p>

        {/* Price and Selection Section */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground">Select Weight:</span>
            <span className="text-lg font-bold text-primary">₹{product.prices[selectedIdx].price}</span>
          </div>

          <div className="relative">
            <select
              value={selectedIdx}
              onChange={(e) => setSelectedIdx(parseInt(e.target.value))}
              className="w-full appearance-none bg-background border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all cursor-pointer"
            >
              {product.prices.map((p, i) => (
                <option key={p.label} value={i}>
                  {p.label} – ₹{p.price}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button 
          onClick={handleAdd}
          disabled={added}
          className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
            added 
              ? 'bg-green-600 text-white cursor-default' 
              : 'bg-gradient-gold text-primary-foreground hover:shadow-gold active:scale-95'
          }`}
        >
          {added ? (
            <>
              <Check className="h-4 w-4" /> 
              Added!
            </>
          ) : (
            <>
              <ShoppingCart className="h-4 w-4" /> 
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;