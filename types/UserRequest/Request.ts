export interface LoginReq {
  loginId: string;
  password: string;
}

export interface RegisterReq {
  userEmail: string;
  userName: string;
  userNickname: string;
  password: string;
  birthday: Date;
  phoneNo: string;
  isAgree: boolean;
}

export interface VeriftyEmailReq {
  email: string;
  verifyCode: string;
}

export interface inputRegisterType {
  userEmail: string;
  userName: string;
  userNickname: string;
  loginId: string;
  birthday: Date;
  password: string;
  confirmPassword: string;
  phone: string;
  isUserConfirm: boolean;
  isLoginIdConfirm: boolean;
  privateAgree: privateAgreeType;
}

export interface privateAgreeType {
  isAgree: boolean;
  isUseConfirm: boolean;
  isAdvertisingConfirm?: boolean;
}