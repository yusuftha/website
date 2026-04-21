import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Charizard GX - Hidden Fates',
    price: 450.00,
    category: 'Single Cards',
    image: 'https://images.pokemontcg.io/sm115/SV49_hires.png',
    rarity: 'Shiny Holo Rare',
    set: 'Hidden Fates',
    description: 'A stunning Shiny Charizard GX from the Hidden Fates set. Mint condition, high priority for any collector.',
    stock: 2
  },
  {
    id: '2',
    name: 'Pikachu VMAX - Vivid Voltage',
    price: 185.00,
    category: 'Single Cards',
    image: 'https://images.pokemontcg.io/swsh4/188_hires.png',
    rarity: 'Rainbow Rare',
    set: 'Vivid Voltage',
    description: 'The "Chonky Pikachu" Rainbow Rare. A modern classic from the Sword & Shield era.',
    stock: 5
  },
  {
    id: '3',
    name: 'Crown Zenith Elite Trainer Box',
    price: 54.99,
    category: 'Elite Trainer Boxes',
    image: 'https://images.pokemontcg.io/swsh12pt5/logo.png', // Fallback for box image
    description: 'Celebrate the final series of Sword & Shield with this special collection. Includes 10 booster packs.',
    stock: 12
  },
  {
    id: '4',
    name: 'PSA 10 Lugia Legend Top - HGSS',
    price: 899.00,
    category: 'Graded Cards',
    image: 'https://images.pokemontcg.io/hgss1/113_hires.png',
    rarity: 'Legend',
    set: 'HeartGold & SoulSilver',
    description: 'Pristine PSA 10 Lugia Legend card. Rare vintage item.',
    stock: 1
  },
  {
    id: '5',
    name: 'Evolving Skies Booster Pack',
    price: 14.99,
    category: 'Booster Packs',
    image: 'https://images.pokemontcg.io/swsh7/logo.png',
    description: 'Single booster pack of the highly sought-after Evolving Skies set.',
    stock: 45
  },
  {
    id: '6',
    name: 'Umbreon VMAX - Alternate Art',
    price: 620.00,
    category: 'Single Cards',
    image: 'https://images.pokemontcg.io/swsh7/215_hires.png',
    rarity: 'Special Illustration Rare',
    set: 'Evolving Skies',
    description: 'The legendary "Moonbreon". The crown jewel of the Evolving Skies set.',
    stock: 1
  }
];

// Add specific images for non-card items if possible or use better placeholders
PRODUCTS[2].image = 'https://picsum.photos/seed/etb/600/600';
PRODUCTS[4].image = 'https://picsum.photos/seed/booster/600/600';
