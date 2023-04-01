import React, { useState, useEffect } from "react";
import { inputRegisterType } from "@/types/UserRequest/Request";
import { privateAgreeType } from "@/types/UserRequest/Request";
import CheckBox from "@/components/pages/signup/ui/CheckBox";
import Swal from "sweetalert2";
import Step01 from "./signup/Step01";
import Step02 from "./signup/Step02";
import Step03 from "./signup/Step03";
import StButton from "@/components/pages/signup/ui/StButton";
import Steper from "./signup/Steper";
import Step04 from "./signup/Step04";
import Step05 from "./signup/Step05";
import axios from "axios";
import Link from "next/link";
import { useRouter } from 'next/router'

export default function SignUp() {
  const BaseUrl = process.env.baseApiUrl;
  const router = useRouter()
  const [stepId, setStepId] = useState<number>(1);
  const [inputData, setInputData] = useState<inputRegisterType>({
    userEmail: "",
    userName: "",
    userNickname: "",
    loginId: "",
    birthday: 0,
    password: "",
    confirmPassword: "",
    isUserConfirm: false,
    isLoginIdConfirm: false,
    isEmailAgree: false,
    isNickAgree: false,
    isNameConfirm:false,
    privateAgree: {
      isAgree: false,
      isUseConfirm: false,
      isAdvertisingConfirm: false,
    },
  });

  const steps: any = [
    { 1: <Step01 inputData={inputData} setInputData={setInputData} /> },
    { 2: <Step02 inputData={inputData} setInputData={setInputData} /> },
    { 3: <Step03 inputData={inputData} setInputData={setInputData} /> },
    { 4: <Step04 inputData={inputData} setInputData={setInputData} /> },
    { 5: <Step05 inputData={inputData} setInputData={setInputData} /> },
  ];

  // useEffect(()=>{
  //   console.log(inputData)
  // },[inputData])

  const handleStepNext = () => {
    console.log(inputData.privateAgree);
    // 1번 스텝 : 이용약관
    if (stepId === 1 && inputData.privateAgree) {
      if (
        !inputData.privateAgree.isAgree ||
        !inputData.privateAgree.isUseConfirm
      ) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "필수 항목을 동의 해주세요.",
          customClass: {
            confirmButton: "swal-confirm-button",
          },
        });
        return;
      }
      setStepId(stepId + 1);
    } // 2번 스텝 : 이메일 중복 확인, 이름, 생년월일, 이메일 인증
    else if (stepId === 2) {
      if (!inputData.isUserConfirm) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "이메일 중복 확인 및 인증을 해주세요.",
          customClass: {
            confirmButton: "swal-confirm-button",
          },
        });
      }
      else if (inputData.isEmailAgree === false) {
        console.log("inputData.isEmailAgree", inputData.isEmailAgree);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "필수 항목을 동의 해주세요",
          customClass: {
            confirmButton: "swal-confirm-button",
          },
        });
      }else if(inputData.userName===""){
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "이름을 입력해주세요!",
          customClass: {
            confirmButton: "swal-confirm-button",
          },
        });
      }
      else {
        setStepId(stepId + 1);
        return;
      }
      //3번 스텝 : 닉네임
    } else if (stepId === 3) {
      /**닉네임이 공백일때 */
      console.log(inputData)
      if (inputData.userNickname === "") {
        Swal.fire({
          icon: "warning",
          text: "닉네임을 정하지 않았습니다, 그대로 진행하시겠습니까?",
          cancelButtonText: "닉네임 정하기",
          showCancelButton: true,
          customClass: {
            confirmButton: "swal-confirm-button",
            cancelButton: "swal-cancel-button",
          },
        })
        
        .then((result) => {
          if (result.isConfirmed) {
            setStepId(stepId + 1);
          }
          return;
        });
      } 
      if(inputData.userNickname !== "") {
        //닉네임 이용약관 동의 안하고 닉네임이 있을때
        if (inputData.isNickAgree === false && inputData.userNickname !== "") {
          Swal.fire({
            icon: "error",
            text: "닉네임 사용을 원하신다면, 필수 항목에 동의해주세요",
            title: "Oops",
            customClass: {
              confirmButton: "swal-confirm-button",
            },
          });
        } 
        if (
          inputData.isNickAgree === true &&
          inputData.userNickname !== "" && inputData.userNickname.length<=6
        )
          Swal.fire({
            icon: "warning",
            text: `닉네임을 ${inputData.userNickname}으로 정하시겠습니까?`,
            cancelButtonText: "다시 정하기",
            showCancelButton: true,
            customClass: {
              confirmButton: "swal-confirm-button",
              cancelButton: "swal-cancel-button",
            },
          })

          
          .then((result) => {
            if (result.isConfirmed) {
              setStepId(stepId + 1);
            } else {
              setInputData({
                ...inputData,
                userNickname: "",
              });
            }
            return;
          });
      }
    } else if (stepId === 4) {
      if (inputData.password !== inputData.confirmPassword) {
        Swal.fire({
          icon: "error",
          text: `비밀번호가 일치하지 않습니다.`,
          customClass: {
            confirmButton: "swal-confirm-button",
          },
        })}
    else{
      setStepId(stepId + 1);
      return;
    }
      
        
    } else if (stepId === 5) {
      console.log('stepid55555555555555555555555555555555')
      axios
        .post(`${BaseUrl}/api/v1/auth/signup`, {
          loginId: inputData.loginId,
          pwd: inputData.password,
          userName: inputData.userName,
          phoneNum: inputData.phone,
          email: inputData.userEmail,
          birth: "2023-03-27T10:51:32.964Z",
          nickName: inputData.userNickname,
        })
        .then((res) => {

        }).catch((err)=>err);
    }
  };

  return (
    <div className="container">
      {stepId != 5 && (
        <>
          <div>
            <img className="close" src="assets/images/icons/close.svg" onClick={() => router.back()}/>
          </div>
          <Steper stepId={stepId} />
        </>
      )}
      {steps[stepId - 1][stepId]}
      {stepId === 5 ? (
        <footer className="footer-login-sumit">
          <Link href="/login">
            <StButton
              buttonText="로그인하러가기"
              textSize="1.1rem"
              type="button"
              handler={handleStepNext}
            />
          </Link>
        </footer>
      ) : (
        <footer className="footer-login-sumit">
          <StButton
            buttonText="NEXT"
            textSize="1.1rem"
            handler={handleStepNext}
            type="button"
          />
        </footer>
      )}
    </div>
  );
}
