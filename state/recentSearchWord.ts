import { atom } from 'recoil'


export const recentSearchWord = atom({
    key: 'recentSearchWord',
    default: ""
   // effects_UNSTABLE: [persistAtom]
})