import { create } from 'zustand';
import { Coupons } from '../types';

interface CouponStore {
  coupons: Coupons;
  setCoupons: (newCoupons: Coupons) => void;
}

const useCouponStore = create<CouponStore>((set) => ({
  coupons: [],
  setCoupons: (newCoupons: Coupons) => set(() => ({ coupons: newCoupons })),
}));

export default useCouponStore;
