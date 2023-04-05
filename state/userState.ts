import { atom } from 'recoil'

export const userState = atom({
    key: 'userState',
    default:{
        userId:"",
        accessToken:"",
        isLogin:false,
        nickName:""
    }
})