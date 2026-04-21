import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data';
import { Product } from '../types';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';

interface ShopProps {
  onAddToCart: (product: Product) => void;
}

export default function Shop({ onAddToCart }: ShopProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const [priceSort, setPriceSort] = useState<'low' | 'high' | 'featured'>('featured');

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];
    
    if (categoryFilter) {
      result = result.filter(p => p.category === categoryFilter);
    }
    
    if (priceSort === 'low') {
      result.sort((a, b) => a.price - b.price);
    } else if (priceSort === 'high') {
      result.sort((a, b) => b.price - a.price);
    }
    
    return result;
  }, [categoryFilter, priceSort]);

  const categories = [
    'Tüm Ürünler',
    'Booster Paketleri',
    'Tekli Kartlar',
    'Elite Trainer Boxlar',
    'Dereceli Kartlar'
  ];

  return (
    <div className="container mx-auto px-4 py-12 pb-24">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 mb-12">
        <div>
          <h1 className="text-5xl uppercase mb-2 tracking-tighter">
            {categoryFilter || 'TÜM ÜRÜNLER'}
          </h1>
          <p className="text-gray-400 text-sm uppercase tracking-widest">
            {filteredProducts.length} sonuç gösteriliyor
          </p>
        </div>
        
        <div className="flex flex-wrap items-center gap-6 w-full md:w-auto">
          <div className="flex items-center gap-2 group cursor-pointer border-b-2 border-dark-gray dark:border-white pb-1 ml-auto">
            <SlidersHorizontal size={14} className="text-gray-400" />
            <span className="text-xs font-bold uppercase tracking-widest group-hover:text-primary-red transition-colors">Filtrele</span>
          </div>
          
          <div className="relative group">
            <div className="flex items-center gap-2 border-b-2 border-dark-gray dark:border-white pb-1 cursor-pointer">
              <span className="text-xs font-bold uppercase tracking-widest">
                Sırala: {priceSort === 'featured' ? 'Önerilen' : priceSort === 'low' ? 'Ucuzdan Pahalıya' : 'Pahalıdan Ucuza'}
              </span>
              <ChevronDown size={14} className="text-gray-400" />
            </div>
            <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
              <button 
                onClick={() => setPriceSort('featured')}
                className="w-full text-left px-4 py-3 text-xs font-bold hover:bg-gray-50 dark:hover:bg-zinc-800 uppercase tracking-widest"
              >
                Önerilen
              </button>
              <button 
                onClick={() => setPriceSort('low')}
                className="w-full text-left px-4 py-3 text-xs font-bold hover:bg-gray-50 dark:hover:bg-zinc-800 uppercase tracking-widest"
              >
                Ucuzdan Pahalıya
              </button>
              <button 
                onClick={() => setPriceSort('high')}
                className="w-full text-left px-4 py-3 text-xs font-bold hover:bg-gray-50 dark:hover:bg-zinc-800 uppercase tracking-widest"
              >
                Pahalıdan Ucuza
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Sidebar Filters */}
        <aside className="lg:col-span-3 hidden lg:block">
          <div className="space-y-10 sticky top-24">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-6 text-primary-red">Koleksiyon</h3>
              <div className="flex flex-col gap-3">
                {categories.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => {
                        if (cat === 'Tüm Ürünler') setSearchParams({});
                        else setSearchParams({ category: cat });
                    }}
                    className={`text-sm text-left font-medium transition-colors hover:text-primary-red ${
                        (categoryFilter === cat || (cat === 'Tüm Ürünler' && !categoryFilter)) 
                        ? 'text-dark-gray dark:text-white font-bold border-l-2 border-primary-red pl-3' 
                        : 'text-gray-400 pl-3'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-6 text-primary-red">Fiyat Aralığı</h3>
              <div className="flex flex-col gap-3">
                 <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary-red focus:ring-primary-red" />
                    <span className="text-sm text-gray-500 group-hover:text-dark-gray dark:group-hover:text-white transition-colors font-medium">500₺ Altı</span>
                 </label>
                 <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary-red focus:ring-primary-red" />
                    <span className="text-sm text-gray-500 group-hover:text-dark-gray dark:group-hover:text-white transition-colors font-medium">500₺ - 2000₺</span>
                 </label>
                 <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary-red focus:ring-primary-red" />
                    <span className="text-sm text-gray-500 group-hover:text-dark-gray dark:group-hover:text-white transition-colors font-medium">2000₺ Üzeri</span>
                 </label>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-zinc-900 p-6 rounded-sm border-l-4 border-accent-yellow">
                <h4 className="text-xs font-bold uppercase mb-2">Özel Fırsatlar</h4>
                <p className="text-[10px] text-gray-500 uppercase leading-relaxed tracking-wider">
                    Özel ürünlerden ve stok güncellemelerinden haberdar olmak için bültene abone olun.
                </p>
                <button className="mt-4 text-[10px] font-bold text-primary-red uppercase border-b border-primary-red">Abone Ol</button>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="lg:col-span-9">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12">
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={onAddToCart} 
                />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
                <p className="text-gray-400 font-medium mb-4 uppercase tracking-widest">Bu kategoride ürün bulunamadı.</p>
                <button 
                    onClick={() => setSearchParams({})}
                    className="btn-outline mx-auto"
                >
                    Filtreleri Temizle
                </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
