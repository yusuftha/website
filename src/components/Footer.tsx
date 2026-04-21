import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-gray text-white pt-16 pb-8 border-t border-zinc-800">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-zinc-800 pb-12 mb-8">
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
            Asıl Pokémon ticaret kartı ürünleri için adresiniz. Klasiklerden en yeni sürümlere kadar her şey burada.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary-red transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-primary-red transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-primary-red transition-colors"><Twitter size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6 text-sm uppercase tracking-widest text-primary-red">Mağaza</h4>
          <ul className="flex flex-col gap-3 text-gray-400 text-sm">
            <li><Link to="/shop?category=Tekli%20Kartlar" className="hover:text-white transition-colors">Tekli Kartlar</Link></li>
            <li><Link to="/shop?category=Booster%20Paketleri" className="hover:text-white transition-colors">Booster Paketleri</Link></li>
            <li><Link to="/shop?category=Elite%20Trainer%20Boxlar" className="hover:text-white transition-colors">Sealed Ürünler</Link></li>
            <li><Link to="/shop?category=Dereceli%20Kartlar" className="hover:text-white transition-colors">Dereceli Kartlar</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6 text-sm uppercase tracking-widest text-primary-red">Bilgi</h4>
          <ul className="flex flex-col gap-3 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Orijinallik Garantisi</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Nakliye Politikası</a></li>
            <li><a href="#" className="hover:text-white transition-colors">İade ve Geri Ödemeler</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-6 text-sm uppercase tracking-widest text-primary-red">Bülten</h4>
          <p className="text-gray-400 text-sm mb-4">Yeni ürünlerden ilk siz haberdar olun.</p>
          <div className="flex bg-white/10 rounded overflow-hidden border border-white/10">
            <input 
              type="email" 
              placeholder="E-posta" 
              className="bg-transparent border-none px-4 py-2 text-sm w-full focus:ring-0"
            />
            <button className="bg-primary-red px-4 font-bold text-xs uppercase tracking-tighter hover:bg-white hover:text-primary-red transition-all">
              Katıl
            </button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-widest">
        <p>© 2026 Boutique TCG. Nintendo veya The Pokémon Company ile bağlantılı değildir.</p>
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
