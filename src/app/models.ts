export type Category = 'Todos' | 'Smartphones' | 'Audio' | 'Wearables';

export interface Product {
  id: number;
  name: string;
  category: Exclude<Category, 'Todos'>;
  brand: 'Apple' | 'Samsung' | 'Xiaomi';
  releaseYear: 2025 | 2026;
  price: number;
  stock: number;
  icon: string;
  color: string;
  badge?: string;
  description: string;
  officialUrl: string;
  imageUrl: string;
}

export interface CartItem extends Product { quantity: number; }
