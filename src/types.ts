export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Booster Packs' | 'Single Cards' | 'Elite Trainer Boxes' | 'Graded Cards';
  image: string;
  rarity?: string;
  set?: string;
  description: string;
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
}
