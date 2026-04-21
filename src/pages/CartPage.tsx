import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product, CartItem } from '../types';

interface CartPageProps {
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

export default function CartPage({ cart, onUpdateQuantity, onRemove }: CartPageProps) {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
            <ShoppingBag size={48} />
          </div>
          <h2 className="text-4xl font-display uppercase">Sepetiniz Boş</h2>
          <p className="text-gray-400 max-w-xs mx-auto">Koleksiyonunuza ekleyecek bir şeyler bulun.</p>
          <Link to="/shop" className="btn-primary mt-4">Alışverişe Başla</Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 pb-24">
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-4xl sm:text-5xl uppercase tracking-tighter">Sepetim</h1>
        <Link to="/shop" className="text-sm font-bold uppercase text-primary-red flex items-center gap-2">
          <ArrowLeft size={16} /> Markete Dön
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-6">
          <AnimatePresence initial={false}>
            {cart.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col sm:flex-row items-center gap-6 p-4 bg-white dark:bg-zinc-800/50 border border-gray-100 dark:border-zinc-700/50 rounded-sm shadow-sm"
              >
                <Link to={`/product/${item.id}`} className="w-24 h-32 bg-gray-50 dark:bg-zinc-900 p-2 flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </Link>
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="font-bold text-lg mb-1 leading-tight">{item.name}</h3>
                  <p className="text-xs text-primary-red font-bold uppercase tracking-widest mb-2">{item.category}</p>
                  <p className="text-xl font-display font-bold text-dark-gray dark:text-white">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border-2 border-dark-gray dark:border-white h-10">
                    <button 
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="px-3 h-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="px-4 font-bold min-w-[40px] text-center">{item.quantity}</span>
                    <button 
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="px-3 h-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <button 
                    onClick={() => onRemove(item.id)}
                    className="p-2 text-gray-400 hover:text-primary-red transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="lg:col-span-4">
          <div className="p-8 bg-gray-50 dark:bg-zinc-900/50 border border-gray-100 dark:border-zinc-800 rounded-sm sticky top-24">
            <h2 className="text-xl font-bold uppercase tracking-widest mb-6 border-b border-gray-200 dark:border-zinc-700 pb-4">Özet</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-sm uppercase font-medium text-gray-400">
                <span>Ara Toplam</span>
                <span className="text-dark-gray dark:text-white">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm uppercase font-medium text-gray-400">
                <span>Kargo</span>
                <span className="text-dark-gray dark:text-white">{total > 150 ? 'Ücretsiz' : '$15.00'}</span>
              </div>
              <div className="pt-4 border-t border-gray-200 dark:border-zinc-700 flex justify-between items-baseline">
                <span className="text-lg font-bold uppercase">Toplam</span>
                <span className="text-3xl font-display font-bold text-primary-red">${(total + (total > 150 ? 0 : 15)).toFixed(2)}</span>
              </div>
            </div>
            <Link to="/checkout" className="btn-primary w-full py-4 text-sm font-bold uppercase tracking-[0.2em] mb-4">
              Ödeme Yap
            </Link>
            <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest">
              Ödemelerimiz %100 güvenlidir ve şifrelenmiştir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
