import { useState } from "react";
import { useCookies } from "react-cookie";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import axios from "axios";

import { LoginReq } from "@/types/UserRequest/Request";

import LoginMain from "@/components/sections/LoginMain";
import SecondHeader from "@/components/layouts/SecondHeader";
import StButton from "@/components/pages/signup/ui/StButton";

import { userState } from "@/state/userState";

export default function Login() {
  const router = useRouter();
  const [inputData, setInputData] = useState<LoginReq>({
    loginId: "",
    password: "",
  });
  const [loginData, setLoginData] = useRecoilState(userState);

  const handleLogin = () => {
    if (inputData.loginId === "" || inputData.password === "") {
      Swal.fire({
        icon: "error",
        text: "아이디와 비밀번호를 입력해주세요.",
        customClass: {
          confirmButton: "swal-confirm-button",
        },
      });
      return;
    }
    const BaseUrl = process.env.baseApiUrl;
    axios
      .post(`${BaseUrl}/api/v1/auth/login`, {
        loginId: inputData.loginId,
        pwd: inputData.password,
      })
      .then((res) => {
        if (res.status === 204) {
          Swal.fire({
            icon: "error",
            text: "아이디와 비밀번호를 확인해주세요.",
            customClass: {
              confirmButton: "swal-confirm-button",
            },
          });
        } else if (res.status === 200) {
          setLoginData({
            userId: res.data.data.userId,
            accessToken: res.data.data.accessToken,
            isLogin: true,
            nickName: res.data.data.nickName,
          });
          let myLogin = localStorage;
          myLogin.setItem("userId", res.data.data.userId);
          myLogin.setItem("accessToken", res.data.data.accessToken);
          myLogin.setItem("nickName", res.data.data.nickName);
          Swal.fire({
            icon: "success",
            text: "로그인 성공",
            customClass: {
              confirmButton: "swal-confirm-button",
            },
          }).then((res) => res.isConfirmed && router.push(`/`));
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "아이디 혹은 비밀번호가 틀렸습니다.",
        });
      });
  };
  return (
    <>
      <SecondHeader title={"로그인"} />
      <LoginMain inputData={inputData} setInputData={setInputData} />
      <footer className="footer-login-sumit">
        <StButton
          buttonText="로그인"
          textSize="1.1rem"
          handler={handleLogin}
          type="button"
        />
      </footer>
    </>
  );
}
