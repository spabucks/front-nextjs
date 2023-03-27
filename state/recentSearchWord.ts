import { atom } from 'recoil'


export const recentSearchWord = atom<string[]>({
    key: 'recentSearchWord',
    default: [],
   // effects_UNSTABLE: [persistAtom]
})