import { cartType } from "./cartTypes";
import { atom } from "recoil";

export const cartBuyProduct = atom<cartType>({
  key: "cartBuyProduct",
  default: { cartListFreeze: [], cartList: [] },
});