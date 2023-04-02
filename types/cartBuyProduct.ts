import { cartListType, cartType } from "./cartTypes";
import { atom } from "recoil";

export const cartBuyProduct = atom<cartListType[]>({
  key: "cartBuyProduct",
  default: [],
});