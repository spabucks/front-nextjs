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
  userEmail: string ;
  userName: string;
  userNickname: string;
  loginId: string;
  birthday: number;
  password: string;
  confirmPassword: string;
  isUserConfirm: boolean;
  isLoginIdConfirm: boolean;
  privateAgree: privateAgreeType;
  isEmailAgree:boolean;
  isNickAgree:boolean;
  isNameConfirm:boolean;
  isNumber:number;
}

export interface privateAgreeType {
  isAgree: boolean;
  isUseConfirm: boolean;
  isAdvertisingConfirm?: boolean;
}

export interface deliveryRegisterType {
  name: string;
  recipient: string;
  defaultAddress: string;
  phoneNum: string;
  content: string;
  defaultDestination: boolean;
}
