import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Charizard GX - Hidden Fates',
    price: 450.00,
    category: 'Tekli Kartlar',
    image: 'https://images.pokemontcg.io/sm115/SV49_hires.png',
    rarity: 'Shiny Holo Rare',
    set: 'Hidden Fates',
    description: 'Hidden Fates setinden muhteşem bir Shiny Charizard GX. Kondisyonu mükemmel, her koleksiyoncu için öncelikli bir parça.',
    stock: 2
  },
  {
    id: '2',
    name: 'Pikachu VMAX - Vivid Voltage',
    price: 185.00,
    category: 'Tekli Kartlar',
    image: 'https://images.pokemontcg.io/swsh4/188_hires.png',
    rarity: 'Rainbow Rare',
    set: 'Vivid Voltage',
    description: 'Meşhur "Chonky Pikachu" Rainbow Rare. Sword & Shield döneminden modern bir klasik.',
    stock: 5
  },
  {
    id: '3',
    name: 'Crown Zenith Elite Trainer Box',
    price: 54.99,
    category: 'Elite Trainer Boxlar',
    image: 'https://images.pokemontcg.io/swsh12pt5/logo.png',
    description: 'Sword & Shield serisinin finalini bu özel koleksiyonla kutlayın. 10 adet booster paketi içerir.',
    stock: 12
  },
  {
    id: '4',
    name: 'PSA 10 Lugia Legend Top - HGSS',
    price: 899.00,
    category: 'Dereceli Kartlar',
    image: 'https://images.pokemontcg.io/hgss1/113_hires.png',
    rarity: 'Legend',
    set: 'HeartGold & SoulSilver',
    description: 'Kusursuz PSA 10 Lugia Legend kartı. Nadir vintage ürün.',
    stock: 1
  },
  {
    id: '5',
    name: 'Evolving Skies Booster Paketi',
    price: 14.99,
    category: 'Booster Paketleri',
    image: 'https://images.pokemontcg.io/swsh7/logo.png',
    description: 'Çok aranan Evolving Skies setinden tekli booster paketi.',
    stock: 45
  },
  {
    id: '6',
    name: 'Umbreon VMAX - Alternatif Sanat',
    price: 620.00,
    category: 'Tekli Kartlar',
    image: 'https://images.pokemontcg.io/swsh7/215_hires.png',
    rarity: 'Special Illustration Rare',
    set: 'Evolving Skies',
    description: 'Efsanevi "Moonbreon". Evolving Skies setinin en değerli parçası.',
    stock: 1
  }
];

PRODUCTS[2].image = 'https://picsum.photos/seed/etb/600/600';
PRODUCTS[4].image = 'https://picsum.photos/seed/booster/600/600';
