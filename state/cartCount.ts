import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

export const cartCount = atom<number>({
    key: 'cartCount',
    default: 1
})