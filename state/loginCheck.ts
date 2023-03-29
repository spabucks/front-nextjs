import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'
import { loginTokenType } from '@/types/logintokenTypes';
const { persistAtom } = recoilPersist();

export const loginCheck = atom<boolean>({
    key: 'logincheck',
    default:false,
    effects_UNSTABLE: [persistAtom]
})