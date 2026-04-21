import { ArrowRight, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data';
import { Product } from '../types';
import { motion } from 'motion/react';

interface HomeProps {
  onAddToCart: (product: Product) => void;
}

export default function Home({ onAddToCart }: HomeProps) {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="flex flex-col gap-12 sm:gap-20 pb-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://picsum.photos/seed/pokemonhero/1920/1080?blur=5" 
            alt="Hero Background" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-0 right-0 w-1/2 h-full hidden lg:flex items-center justify-center p-12">
            <motion.div 
              initial={{ rotate: 15, scale: 0.8, opacity: 0 }}
              animate={{ rotate: 8, scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-full h-full flex items-center justify-center"
            >
                <img 
                    src="https://images.pokemontcg.io/sm115/SV49_hires.png" 
                    alt="Öne Çıkan Kart"
                    className="w-auto h-[70%] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform hover:rotate-0 duration-700"
                />
            </motion.div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="flex items-center gap-2 text-accent-yellow font-bold text-xs uppercase tracking-[0.3em] mb-4"
            >
              <span className="w-8 h-[2px] bg-accent-yellow" />
              Sınırlı Sayıda Koleksiyon Ürünleri
            </motion.div>
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-7xl lg:text-8xl text-white mb-6 leading-[0.9]"
            >
              KOLEKSİYONUNU OLUŞTUR
            </motion.h1>
            <motion.p 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-lg mb-10 leading-relaxed max-w-lg"
            >
              Ciddi koleksiyoncular için nadir Pokémon kartları, özel mühürlü ürünler ve dereceli hazineler.
            </motion.p>
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/shop" className="btn-primary px-10 py-4 h-auto text-lg group">
                Mağazayı Gez
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/shop?category=Dereceli%20Kartlar" className="btn-outline border-white text-white hover:bg-white hover:text-dark-gray px-10 py-4 h-auto text-lg">
                Dereceli Kartlar
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-gray-100 dark:border-zinc-800">
          <div className="flex items-start gap-4">
            <div className="bg-gray-100 dark:bg-zinc-800 p-4 rounded-full text-primary-red">
              <ShieldCheck size={28} />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg mb-1">100% Orijinal</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Mağazamızda listelenen her kart, satışa sunulmadan önce titizlikle incelenir.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-gray-100 dark:bg-zinc-800 p-4 rounded-full text-primary-red">
              <Truck size={28} />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg mb-1">Güvenli Gönderim</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Tüm yüksek değerli gönderiler için dolgulu kılıflar ve takviyeli kutular kullanılır.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-gray-100 dark:bg-zinc-800 p-4 rounded-full text-primary-red">
              <RotateCcw size={28} />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg mb-1">Kolay İade</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Orijinal durumundaki tüm mühürlü ürünler için 14 günlük iade penceresi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl">KATEGORİLERE GÖRE GÖZ AT</h2>
            <div className="w-20 h-1 bg-primary-red mt-2" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { name: 'Booster Paketleri', items: '24+ Ürün', img: 'https://picsum.photos/seed/booster/600/800' },
            { name: 'Tekli Kartlar', items: '150+ Ürün', img: 'https://images.pokemontcg.io/swsh4/188_hires.png' },
            { name: 'Elite Trainer Boxlar', items: '12+ Ürün', img: 'https://picsum.photos/seed/etb/600/800' },
            { name: 'Dereceli Kartlar', items: '8+ Ürün', img: 'https://images.pokemontcg.io/hgss1/113_hires.png' }
          ].map((cat, idx) => (
            <Link 
              key={cat.name} 
              to={`/shop?category=${encodeURIComponent(cat.name)}`}
              className="group relative aspect-[3/4] overflow-hidden bg-gray-100 dark:bg-zinc-800 rounded-sm"
            >
              <img 
                src={cat.img} 
                alt={cat.name} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-gray/90 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h4 className="text-sm font-bold uppercase tracking-widest">{cat.name}</h4>
                <p className="text-[10px] text-gray-300 font-medium ">{cat.items}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Grid */}
      <section className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl uppercase">ŞU AN POPÜLER</h2>
            <div className="w-20 h-1 bg-primary-red mt-2" />
          </div>
          <Link to="/shop" className="text-sm font-bold uppercase text-primary-red border-b-2 border-primary-red pb-1 hover:text-dark-gray dark:hover:text-white hover:border-dark-gray dark:hover:border-white transition-colors">
            Hepsini Gör
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart} 
            />
          ))}
        </div>
      </section>

      {/* Asymmetric Promo Grid */}
      <section className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 relative h-[400px] bg-dark-gray overflow-hidden flex flex-col justify-center p-8 sm:p-16">
            <div className="absolute inset-0 opacity-30">
               <img 
                src="https://picsum.photos/seed/promo1/1200/600" 
                alt="Promo" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 text-white max-w-md">
              <span className="text-accent-yellow text-xs font-bold tracking-[0.2em] mb-4 block uppercase font-display italic">Nadir Parçalar</span>
              <h2 className="text-4xl mb-4 leading-tight">NOSTALJİK HEARTGOLD & SOULSILVER</h2>
              <p className="text-gray-300 text-sm mb-8 leading-relaxed">
                HGSS döneminden 20'den fazla yeni Holo Rare kartla vintage koleksiyonumuzu genişlettik. Tüm kartlar NM kondisyondadır.
              </p>
              <Link to="/shop?category=Tekli%20Kartlar" className="btn-primary w-fit uppercase text-xs tracking-widest px-8">Koleksiyonu Keşfet</Link>
            </div>
          </div>
          <div className="lg:col-span-4 bg-primary-red flex flex-col items-center justify-center p-12 text-center text-white">
            <h3 className="text-4xl mb-4 uppercase tracking-tighter">KARTLARINIZI SATMAK MI İSTİYORSUNUZ?</h3>
            <p className="text-white/80 text-sm mb-8">
              Yüksek değerli tekli kartlar ve mühürlü koleksiyonlar için rekabetçi fiyatlar sunuyoruz.
            </p>
            <button className="btn-outline border-white text-white hover:bg-white hover:text-primary-red px-8 uppercase text-xs tracking-widest">
                ALICILARIMIZLA İLETİŞİME GEÇİN
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
