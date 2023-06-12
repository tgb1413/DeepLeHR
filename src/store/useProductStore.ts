import { create } from 'zustand';
import { Product } from '../types';

interface ProductStore {
  products: Product[];
  setProducts: (newProducts: Product[]) => void;
}

const useProductStore = create<ProductStore>((set) => ({
  products: [],
  setProducts: (newProducts: Product[]) =>
    set(() => ({ products: newProducts })),
}));

export default useProductStore;
