export type Meal = {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
};

export type Customer = {
  name: string;
  email: string;
  street: string;
  city: string;
  "postal-code": string;
};

export type Item = {
  meal: Meal;
  quantity: number;
};

export type Order = {
  items: Item[];
  customer: Customer;
};
