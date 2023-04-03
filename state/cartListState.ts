import { cartType } from "@/types/cartTypes";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const cartListState = atom<cartType>({
  key: "cartListState",
  default: {
    cartTotal :[],
    cartListFreeze: [],
    cartList: [],
    // effects_UNSTABLE: [persistAtom]
  },
});