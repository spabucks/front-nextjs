export interface LoginReq {
  userEmail: string;
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
  userEmail: string | undefined;
  userName: string | undefined;
  userNickname: string | undefined;
  birthday: Date | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;
  phone: string | undefined;
  isUserConfirm: boolean | undefined;
  privateAgree: privateAgreeType | undefined;
}

export interface privateAgreeType {
  isAgree: boolean;
  isUseConfirm: boolean;
  isAdvertisingConfirm?: boolean;
}