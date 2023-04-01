import { atom } from "recoil";

export const cartFetchCheck = atom<boolean>({
  key: "cartFetchCheck",
  default: false
});