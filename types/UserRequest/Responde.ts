import { BaseRes } from "@/constants/Apis/Types/ResponseType";

export interface RegisterRes {
  userEmail: string;
  userName: string;
}

export interface LoginRes {
  userId: string;
  accessToken: string;
  refreshToken: string;
}

export interface TokenInfo {
  accessToken: string;
}

export interface ReIssueTokenRes extends BaseRes {
  data: TokenInfo;
}

export interface LogoutRes {
  userName: string;
}
