import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'
interface keyInterface {
    text: string;
  }
export const recentSearchWord = atom<string>({
    key: 'recentSearchWord',
    default: "",
    // effects_UNSTABLE: [persistAtom]
})