import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

export const modal = atom<Boolean>({
    key: 'modal',
    default: false,
})