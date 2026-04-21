import { ArrowRight, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data';
import { Product } from '../types';

interface HomeProps {
  onAddToCart: (product: Product) => void;
}

export default function Home({ onAddToCart }: HomeProps) {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="flex flex-col gap-12 sm:gap-20 pb-20">
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
            <div className="relative w-full h-full flex items-center justify-center">
                <img 
                    src="https://images.pokemontcg.io/sm115/SV49_hires.png" 
                    alt="Featured Card"
                    className="w-auto h-[70%] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] rotate-[8deg] transition-transform hover:rotate-0 duration-700"
                />
            </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-accent-yellow font-bold text-xs uppercase tracking-[0.3em] mb-4">
              <span className="w-8 h-[2px] bg-accent-yellow" />
              Limited Edition Collectors Items
            </div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl text-white mb-6 leading-[0.9]">
              BUILD YOUR COLLECTION
            </h1>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-lg">
              Curating rare Pokémon cards, exclusive sealed products, and graded treasures for the serious collector.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shop" className="btn-primary px-10 py-4 h-auto text-lg group">
                Shop Collection
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/shop?category=Graded%20Cards" className="btn-outline border-white text-white hover:bg-white hover:text-dark-gray px-10 py-4 h-auto text-lg">
                View Graded
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-gray-100">
          <div className="flex items-start gap-4">
            <div className="bg-gray-100 p-4 rounded-full text-primary-red">
              <ShieldCheck size={28} />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg mb-1">100% Authentic</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Every card is strictly vetted for authenticity before being listed on our shop.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-gray-100 p-4 rounded-full text-primary-red">
              <Truck size={28} />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg mb-1">Secure Shipping</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Padded sleeves, toploaders, and reinforced boxes for all high-value shipments.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-gray-100 p-4 rounded-full text-primary-red">
              <RotateCcw size={28} />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg mb-1">Hassle-Free Returns</h3>
              <p className="text-gray-500 text-sm leading-relaxed">14-day return window for all sealed products in their original condition.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl">SHOP BY CATEGORY</h2>
            <div className="w-20 h-1 bg-primary-red mt-2" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { name: 'Booster Packs', items: '24+ Items', img: 'https://picsum.photos/seed/booster/600/800' },
            { name: 'Single Cards', items: '150+ Items', img: 'https://images.pokemontcg.io/swsh4/188_hires.png' },
            { name: 'Elite Trainer Boxes', items: '12+ Items', img: 'https://picsum.photos/seed/etb/600/800' },
            { name: 'Graded Cards', items: '8+ Items', img: 'https://images.pokemontcg.io/hgss1/113_hires.png' }
          ].map((cat, idx) => (
            <Link 
              key={cat.name} 
              to={`/shop?category=${encodeURIComponent(cat.name)}`}
              className="group relative aspect-[3/4] overflow-hidden bg-gray-100 rounded-sm"
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
            <h2 className="text-3xl sm:text-4xl uppercase">POPULAR RIGHT NOW</h2>
            <div className="w-20 h-1 bg-primary-red mt-2" />
          </div>
          <Link to="/shop" className="text-sm font-bold uppercase text-primary-red border-b-2 border-primary-red pb-1 hover:text-dark-gray hover:border-dark-gray transition-colors">
            View All
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
              <span className="text-accent-yellow text-xs font-bold tracking-[0.2em] mb-4 block uppercase font-display italic">Rare Drop</span>
              <h2 className="text-4xl mb-4 leading-tight">VINTAGE HEARTGOLD & SOULSILVER</h2>
              <p className="text-gray-300 text-sm mb-8 leading-relaxed">
                We've just expanded our vintage collection with over 20 new Holo Rares from the HGSS era. All cards are NM condition.
              </p>
              <Link to="/shop?category=Single%20Cards" className="btn-primary w-fit uppercase text-xs tracking-widest px-8">Explor Collection</Link>
            </div>
          </div>
          <div className="lg:col-span-4 bg-primary-red flex flex-col items-center justify-center p-12 text-center text-white">
            <h3 className="text-4xl mb-4">WANT TO SELL YOUR CARDS?</h3>
            <p className="text-white/80 text-sm mb-8">
              We offer highly competitive rates for high-value singles and sealed collections.
            </p>
            <button className="btn-outline border-white text-white hover:bg-white hover:text-primary-red px-8 uppercase text-xs tracking-widest">
                Contact Our Buyers
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
