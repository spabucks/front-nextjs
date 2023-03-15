import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist();
export const orderPrice = atom<number>({
    key: 'orderPrice',
    default: 0
})