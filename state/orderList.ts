import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist();
export const orderListitem = atom<number>({
    key: 'orderList',
    default: 0,
    effects_UNSTABLE: [persistAtom]
})