import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, X, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  cartCount: number;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export default function Header({ cartCount, isDarkMode, onToggleTheme }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-dark-gray border-b border-gray-100 dark:border-zinc-800 shadow-sm transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Mobile menu toggle */}
        <button 
          className="lg:hidden text-dark-gray dark:text-white" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary-red rounded-full flex items-center justify-center transition-transform group-hover:rotate-12">
            <div className="w-4 h-4 bg-white rounded-full border-2 border-dark-gray" />
          </div>
          <span className="text-xl font-display font-bold text-dark-gray dark:text-white tracking-tighter">
            BOUTIQUE<span className="text-primary-red">TCG</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/" className="nav-link">Ana Sayfa</Link>
          <Link to="/shop" className="nav-link">Tüm Ürünler</Link>
          <Link to="/shop?category=Tekli%20Kartlar" className="nav-link">Tekli Kartlar</Link>
          <Link to="/shop?category=Booster%20Paketleri" className="nav-link">Booster</Link>
          <Link to="/shop?category=Dereceli%20Kartlar" className="nav-link">Dereceli</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3 md:gap-4 text-dark-gray dark:text-white">
          <button 
            onClick={onToggleTheme}
            className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
            title="Temayı Değiştir"
          >
            {isDarkMode ? <Sun size={20} className="text-accent-yellow" /> : <Moon size={20} />}
          </button>
          
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full transition-colors hidden sm:block">
            <Search size={20} />
          </button>
          
          <Link to="/login" className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full transition-colors">
            <User size={20} />
          </Link>
          
          <Link to="/cart" className="relative p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full transition-colors">
            <ShoppingCart size={20} />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  key={cartCount}
                  className="absolute top-0 right-0 bg-primary-red text-white text-[10px] font-bold px-1 rounded-full min-w-[18px] h-[18px] flex items-center justify-center border-2 border-white dark:border-dark-gray"
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </Link>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-dark-gray border-b border-gray-200 dark:border-zinc-800 py-6 px-4 flex flex-col gap-4 shadow-xl"
          >
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Ana Sayfa</Link>
            <Link to="/shop" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Tüm Ürünler</Link>
            <Link to="/shop?category=Tekli%20Kartlar" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Tekli Kartlar</Link>
            <Link to="/shop?category=Booster%20Paketleri" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Booster</Link>
            <Link to="/shop?category=Dereceli%20Kartlar" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Dereceli</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
