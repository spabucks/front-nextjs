import { atom } from 'recoil'

import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist();
export const recentSearchWord = atom<string[]>({
    key: 'recentSearchWord',
    default: [],
    effects_UNSTABLE: [persistAtom]
})