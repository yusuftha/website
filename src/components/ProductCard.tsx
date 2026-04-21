import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative bg-white dark:bg-zinc-800/50 border border-gray-100 dark:border-zinc-700/50 rounded-sm overflow-hidden card-hover"
    >
      {/* Label/Badge */}
      {product.rarity && (
        <span className="absolute top-2 left-2 z-10 bg-dark-gray/90 backdrop-blur-md text-white text-[9px] font-bold px-2 py-0.5 rounded tracking-widest uppercase">
          {product.rarity.split(' ')[0]}
        </span>
      )}
      
      {/* Image Container */}
      <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-gray-50 dark:bg-zinc-900">
        <img 
          src={product.image} 
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </Link>

      {/* Content */}
      <div className="p-4">
        <p className="text-[10px] text-primary-red font-bold uppercase tracking-widest mb-1">
          {product.category}
        </p>
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="text-sm font-semibold text-dark-gray dark:text-white line-clamp-1 group-hover:text-primary-red transition-colors mb-2">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-between mt-auto">
          <span className="font-display font-bold text-lg text-dark-gray dark:text-white">
            ${product.price.toFixed(2)}
          </span>
          <motion.button 
            whileTap={{ scale: 0.8 }}
            onClick={() => onAddToCart(product)}
            className="p-2.5 bg-gray-100 dark:bg-zinc-700 text-dark-gray dark:text-white hover:bg-primary-red hover:text-white transition-all rounded-full"
            title="Sepete Ekle"
          >
            <ShoppingCart size={16} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
