import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist();
export const cartProductData = atom<[]>({
    key: 'cartData',
    default: [],
    effects_UNSTABLE: [persistAtom]
})