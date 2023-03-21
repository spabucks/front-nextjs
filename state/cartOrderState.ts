import { cartType } from "@/types/caertTypes";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const cartOrderState = atom({
  key: "cartOrderState",
  default: {
    typeId: 0,
    itemId: 0
    // effects_UNSTABLE: [persistAtom]
  },
});