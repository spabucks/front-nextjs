import LoginMain from "@/components/sections/LoginMain";
import LoginHeader from "@/components/sections/LoginHeader";
import Head from "next/head";
import { useState } from "react";
import { LoginReq } from "@/types/UserRequest/Request";
import StButton from "@/components/pages/signup/ui/StButton";
import Swal from "sweetalert2";
import axios from "axios";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { useCookies } from "react-cookie";
import { userState } from "@/state/userState";
export default function Login() {
  const BaseUrl = process.env.baseApiUrl;
  const router = useRouter();

  const [inputData, setInputData] = useState<LoginReq>({
    loginId: "",
    password: "",
  });
  //로그인 데이터
  //하루로 기간설정
  // const expires = new Date();
  const [loginData, setLoginData] = useRecoilState(userState);
  const [cookies, setCookie,removeCookie] = useCookies(["id"]);


  const handleLogin = () => {
    console.log(inputData);
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
    console.log('inputData.loginId',inputData.loginId)
    console.log('inputData.password',inputData.password)
    axios
      .post(`${BaseUrl}/api/v1/auth/login`, {
        loginId: inputData.loginId,
        pwd: inputData.password,
      })
      .then((res) => {
        console.log('resssssssssssssssssssssssssssss',res)
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
          });
          let myLogin = localStorage;
          myLogin.setItem("userId", res.data.data.userId);
          myLogin.setItem("accessToken",res.data.data.accessToken)
          // setCookie("id", res.data.data.accessToken, { path: "/",expires: expires});

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
        if (err.response.status === 500) {
          Swal.fire({
            icon: "error",
            title: "아이디 혹은 비밀번호가 틀렸습니다.",
          });
          // setInputData({
          //   loginId: "",
          //   password: "",
          // });
        // } else if (err.response.status === 500) {
        //   Swal.fire({
        //     icon: "error",
        //     title: "서버에 접속할 수 없습니다. 잠시후에 다시 시도해주세요.",
        //   });
          // setInputData({
          //   loginId: "",
          //   password: "",
          // });
        }
      });
  };

  return (
    <>
      <Head>
        <title>starbucks login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="/favic
        rfon.ico"
        />
      </Head>
      <LoginHeader />
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
