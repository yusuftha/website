import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  cartCount: number;
}

export default function Header({ cartCount }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Mobile menu toggle */}
        <button 
          className="lg:hidden text-dark-gray" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary-red rounded-full flex items-center justify-center transition-transform group-hover:rotate-12">
            <div className="w-4 h-4 bg-white rounded-full border-2 border-dark-gray" />
          </div>
          <span className="text-xl font-display font-bold text-dark-gray tracking-tighter">
            BOUTIQUE<span className="text-primary-red">TCG</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 font-medium text-sm uppercase tracking-widest text-gray-500">
          <Link to="/" className="hover:text-primary-red transition-colors">Home</Link>
          <Link to="/shop" className="hover:text-primary-red transition-colors">Shop All</Link>
          <Link to="/shop?category=Single%20Cards" className="hover:text-primary-red transition-colors">Singles</Link>
          <Link to="/shop?category=Elite%20Trainer%20Boxes" className="hover:text-primary-red transition-colors">Sealed</Link>
          <Link to="/shop?category=Graded%20Cards" className="hover:text-primary-red transition-colors">Graded</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4 text-dark-gray">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden sm:block">
            <Search size={20} />
          </button>
          <Link to="/login" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <User size={20} />
          </Link>
          <Link to="/cart" className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-primary-red text-white text-[10px] font-bold px-1 rounded-full min-w-[18px] h-[18px] flex items-center justify-center border-2 border-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 py-6 px-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Home</Link>
          <Link to="/shop" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Shop All</Link>
          <Link to="/shop?category=Single%20Cards" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Singles</Link>
          <Link to="/shop?category=Elite%20Trainer%20Boxes" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Sealed</Link>
          <Link to="/shop?category=Graded%20Cards" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Graded</Link>
        </div>
      )}
    </header>
  );
}
