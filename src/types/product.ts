export interface Product {
  id: number;
  name: string;
  price: {
    "250g": number;
    "500g": number;
    "1kg": number;
  };
  image: string | any;
  description: string;
  category: string;
  benefits: string[];
  origin: string;
  organic: boolean;
  background:string;
  model: string;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  weight: string;
  image: string;
}