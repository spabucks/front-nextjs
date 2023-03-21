import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

export const freezedelivery = atom<number>({
    key: 'freezedelivery',
    default: 0,
})