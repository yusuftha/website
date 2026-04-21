export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Booster Paketleri' | 'Tekli Kartlar' | 'Elite Trainer Boxlar' | 'Dereceli Kartlar';
  image: string;
  rarity?: string;
  set?: string;
  description: string;
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
}
