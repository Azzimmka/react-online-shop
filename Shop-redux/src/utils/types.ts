export type Product = {
  id: number;
  title: string;
  price: number;
  image?: string;
  category?: string;
};

export type CartItem = {
    productId: number;
    quantity: number;
}

export type State  ={
  products: Product[];
  cart: CartItem[];
  likedIds: number[];
  loading: boolean;
}

export type Action =
  | { type: "SET_PRODUCTS"; payload: Product[] }  
  | { type: "TOGGLE_LIKE"; payload: { productId: number } }
  | { type: "ADD_TO_CART"; payload: { productId: number } }
