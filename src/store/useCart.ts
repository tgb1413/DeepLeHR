import { create } from 'zustand';
import { Product, ProductInCart } from '../types';

interface CartStore {
  cart: ProductInCart[];
  addNewProduct: (product: Product) => void;
  removeProduct: (productNumber: number) => void;
  modifyProductCount: (productNumber: number, newCount: number) => void;
  modifyProductSelected: (productNumber: number, newSelected: boolean) => void;
  resetAllSelected: () => void;
}

const useCart = create<CartStore>((set) => ({
  cart: [],
  addNewProduct: (product) => {
    set((state) => ({
      ...state,
      cart: [...state.cart, { ...product, count: 1, selected: false }],
    }));
  },
  removeProduct: (productNumber) =>
    set((state) => ({
      ...state,
      cart: state.cart.filter(
        (savedProduct) => savedProduct.item_no !== productNumber,
      ),
    })),
  modifyProductCount: (productNumber, newCount) =>
    set((state) => ({
      ...state,
      cart: state.cart.map((savedProduct) => ({
        ...savedProduct,
        count:
          savedProduct.item_no === productNumber
            ? newCount
            : savedProduct.count,
      })),
    })),
  modifyProductSelected: (productNumber, newSelected) =>
    set((state) => ({
      ...state,
      cart: state.cart.map((savedProduct) => ({
        ...savedProduct,
        selected:
          savedProduct.item_no === productNumber
            ? newSelected
            : savedProduct.selected,
      })),
    })),
  resetAllSelected: () =>
    set((state) => ({
      ...state,
      cart: state.cart.map((product) => ({ ...product, selected: false })),
    })),
}));

export default useCart;
