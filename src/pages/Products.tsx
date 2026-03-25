import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import patternBg from '@/assets/pattern-bg.jpg';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const category = searchParams.get('category') || 'all';

  const filtered = useMemo(() => {
    let list = products;
    if (category !== 'all') list = list.filter(p => p.category === category);
    if (search) list = list.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
    return list;
  }, [category, search]);

  const setCategory = (c: string) => {
    if (c === 'all') searchParams.delete('category');
    else searchParams.set('category', c);
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <img src={patternBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="relative z-10 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-2">Our <span className="text-gradient-gold">Products</span></h1>
          <p className="text-primary-foreground/80">56+ authentic sweets & snacks</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          {/* Filters */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div className="flex gap-2">
              {[
                { key: 'all', label: 'All Items' },
                { key: 'hot-items', label: '🔥 Hot Items' },
                { key: 'sweets', label: '🍬 Sweets' },
              ].map(c => (
                <button key={c.key} onClick={() => setCategory(c.key)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${category === c.key ? 'bg-gradient-gold text-primary-foreground shadow-gold' : 'bg-muted text-muted-foreground hover:bg-primary/10'}`}
                >{c.label}</button>
              ))}
            </div>
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text" placeholder="Search products..." value={search} onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-6">{filtered.length} products found</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map(p => <ProductCard key={p.id} product={p} />)}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No products found. Try a different search or category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
