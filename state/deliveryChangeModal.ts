import { atom } from 'recoil'

export const deliveryChangeModal = atom<boolean>({
    key: 'deliveryChangeModal',
    default: false
}) 