import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-gray text-white pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-700 pb-12 mb-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary-red rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full border border-dark-gray" />
            </div>
            <span className="text-xl font-display font-bold tracking-tighter">
              BOUTIQUE<span className="text-primary-red">TCG</span>
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your destination for premium, authentic Pokémon trading card products. From vintage classics to the newest releases.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary-red transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-primary-red transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-primary-red transition-colors"><Twitter size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6 text-sm uppercase tracking-widest text-primary-red">Shop</h4>
          <ul className="flex flex-col gap-3 text-gray-400 text-sm">
            <li><Link to="/shop?category=Single%20Cards" className="hover:text-white transition-colors">Single Cards</Link></li>
            <li><Link to="/shop?category=Booster%20Packs" className="hover:text-white transition-colors">Booster Packs</Link></li>
            <li><Link to="/shop?category=Elite%20Trainer%20Boxes" className="hover:text-white transition-colors">Sealed Products</Link></li>
            <li><Link to="/shop?category=Graded%20Cards" className="hover:text-white transition-colors">Graded Cards</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6 text-sm uppercase tracking-widest text-primary-red">Informaton</h4>
          <ul className="flex flex-col gap-3 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Authenticity Guarantee</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Returns & Refunds</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6 text-sm uppercase tracking-widest text-primary-red">Newsletter</h4>
          <p className="text-gray-400 text-sm mb-4">Join our community for early access to drops.</p>
          <div className="flex bg-white/10 rounded overflow-hidden">
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-transparent border-none px-4 py-2 text-sm w-full focus:ring-0"
            />
            <button className="bg-primary-red px-4 font-bold text-xs uppercase tracking-tighter hover:bg-white hover:text-primary-red transition-all">
              Join
            </button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-widest">
        <p>© 2026 Boutique TCG. Not affiliated with Nintendo or The Pokémon Company.</p>
        <div className="flex gap-6">
          <span>VISA</span>
          <span>MASTERCARD</span>
          <span>AMEX</span>
          <span>PAYPAL</span>
        </div>
      </div>
    </footer>
  );
}
