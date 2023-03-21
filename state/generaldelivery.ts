import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

export const generaldelivery = atom<number>({
    key: 'generaldelivery',
    default: 0,
})