export type Item = {
  id: number;
  title: string;
  description: string;
  price: number;
};

export type CartItem = {
  item: Item;
  quantity: number;
  total: number;
};

export type Cart = {
  cartItems: CartItem[];
  totalQuantity: number;
  isCartModified: boolean;
};
