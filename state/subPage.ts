import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist();
export const subPage = atom<boolean>({
    key: 'subPage',
    default: false
})