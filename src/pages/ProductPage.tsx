import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { ShoppingCart, Heart, Shield, RefreshCw, Truck, ArrowLeft } from 'lucide-react';
import { PRODUCTS } from '../data';
import { Product } from '../types';

interface ProductPageProps {
  onAddToCart: (product: Product, quantity: number) => void;
}

export default function ProductPage({ onAddToCart }: ProductPageProps) {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-2xl mb-4">Product Not Found</h2>
        <Link to="/shop" className="btn-primary inline-flex">Return to Shop</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 pb-24">
      {/* Breadcrumbs */}
      <Link to="/shop" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary-red text-xs font-bold uppercase tracking-widest mb-10 transition-colors">
        <ArrowLeft size={14} />
        Back to Results
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Gallery */}
        <div className="lg:col-span-7">
          <div className="sticky top-24 space-y-6">
            <div className="aspect-square bg-gray-50 flex items-center justify-center p-12 border border-gray-100 overflow-hidden group">
              <img 
                src={product.image} 
                alt={product.name} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
               {[1, 2, 3].map(i => (
                 <div key={i} className="aspect-square bg-gray-50 border border-gray-100 flex items-center justify-center p-4 cursor-pointer hover:border-primary-red transition-all">
                    <img src={product.image} className="w-full h-full object-contain opacity-50 hover:opacity-100" />
                 </div>
               ))}
               <div className="aspect-square bg-gray-50 border border-gray-100 flex items-center justify-center p-4">
                  <span className="text-[10px] font-bold text-gray-300">VIDEO</span>
               </div>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold text-primary-red uppercase tracking-widest">{product.category}</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{product.set || 'Limited Edition'}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl uppercase mb-4 leading-tight">{product.name}</h1>
            <div className="flex items-center gap-6">
               <span className="text-3xl font-display font-bold text-dark-gray">${product.price.toFixed(2)}</span>
               <div className="flex items-center gap-1 text-accent-yellow">
                  {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-4 h-4 bg-accent-yellow [clip-path:polygon(50%_0%,61%_35%,98%_35%,68%_57%,79%_91%,50%_70%,21%_91%,32%_57%,2%_35%,39%_35%)]" />)}
                  <span className="text-[10px] text-gray-400 font-bold ml-2">(12 REVIEWS)</span>
               </div>
            </div>
          </div>

          <p className="text-gray-500 leading-relaxed max-w-md">
            {product.description} All cards shipped from Boutique TCG are guaranteed authentic and arrived in pristine condition.
          </p>

          <div className="space-y-6 pt-4">
            <div className="flex items-center gap-4">
               <div className="flex items-center border-2 border-dark-gray h-12">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 h-full hover:bg-gray-100 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-6 font-bold">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 h-full hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
               </div>
               <button 
                onClick={() => onAddToCart(product, quantity)}
                className="btn-primary flex-1 h-12 uppercase text-xs tracking-widest font-bold"
               >
                 Add to Collection
               </button>
               <button className="h-12 w-12 flex items-center justify-center border-2 border-dark-gray hover:bg-gray-100 transition-colors text-dark-gray">
                  <Heart size={20} />
               </button>
            </div>

            <div className="bg-gray-50 p-6 space-y-4 rounded-sm border border-gray-100">
               <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-dark-gray">
                  <Truck size={18} className="text-primary-red" />
                  <span>Free Shipping on orders over $150</span>
               </div>
               <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-dark-gray">
                  <Shield size={18} className="text-primary-red" />
                  <span>Verified Authentic & Insured</span>
               </div>
               <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-dark-gray">
                  <RefreshCw size={18} className="text-primary-red" />
                  <span>14-day replacement guarantee</span>
               </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8 mt-4">
             <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-4">Collectors Specs</h4>
             <dl className="grid grid-cols-2 gap-x-8 gap-y-4 text-xs font-medium uppercase text-gray-500">
                <div className="flex justify-between border-b border-gray-50 pb-2">
                    <dt>Rarity</dt>
                    <dd className="text-dark-gray font-bold">{product.rarity || 'Regular'}</dd>
                </div>
                <div className="flex justify-between border-b border-gray-50 pb-2">
                    <dt>Condition</dt>
                    <dd className="text-dark-gray font-bold">NM/M</dd>
                </div>
                <div className="flex justify-between border-b border-gray-50 pb-2">
                    <dt>Set</dt>
                    <dd className="text-dark-gray font-bold line-clamp-1 max-w-[100px] text-right">{product.set || 'Sword & Shield'}</dd>
                </div>
                <div className="flex justify-between border-b border-gray-50 pb-2">
                    <dt>Stock</dt>
                    <dd className="text-dark-gray font-bold">{product.stock > 0 ? `${product.stock} Units` : 'Sold Out'}</dd>
                </div>
             </dl>
          </div>
        </div>
      </div>

      {/* Recommended (Simplified) */}
      <div className="mt-24 pt-12 border-t border-gray-100">
          <h2 className="text-3xl mb-10">YOU MAY ALSO LIKE</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             {PRODUCTS.slice(4, 8).map(p => (
                <Link key={p.id} to={`/product/${p.id}`} className="group block">
                    <div className="aspect-[3/4] bg-gray-50 p-4 border border-gray-100 mb-4 flex items-center justify-center overflow-hidden">
                        <img src={p.image} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <h3 className="text-xs font-bold uppercase group-hover:text-primary-red transition-colors">{p.name}</h3>
                    <p className="text-sm font-display font-medium text-gray-400 mt-1">${p.price.toFixed(2)}</p>
                </Link>
             ))}
          </div>
      </div>
    </div>
  );
}
