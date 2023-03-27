import React, {useState, useEffect} from "react";
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


export default function SignUp() {

  const [stepId, setStepId] = useState<number>(1);
  const [inputData, setInputData] = useState<inputRegisterType>({
    userEmail: '',
    userName: '',
    userNickname: '',
    loginId: '',
    birthday: new Date(),
    password: '',
    confirmPassword: '',
    phone: '',
    isUserConfirm: false,
    isLoginIdConfirm: false,
    privateAgree: {
      isAgree: false,
      isUseConfirm: false,
      isAdvertisingConfirm: false,
    },
  });

  const steps:any = [
    { 1: <Step01 inputData={inputData} setInputData={setInputData}/> },
    { 2: <Step02 inputData={inputData} setInputData={setInputData}/> },
    { 3: <Step03 inputData={inputData} setInputData={setInputData}/> },
    { 4: <Step04 inputData={inputData} setInputData={setInputData}/> },
    // { 5: <Step05 inputData={inputData} setInputData={setInputData}/> }
  ]

  // useEffect(()=>{
  //   console.log(inputData)
  // },[inputData])

  const handleStepNext = () => {
    console.log(inputData.privateAgree)
    if(stepId === 1 && inputData.privateAgree) {
      if(!inputData.privateAgree.isAgree  || !inputData.privateAgree.isUseConfirm  ) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: '필수 항목을 동의 해주세요.',
          customClass: {
            confirmButton: 'swal-confirm-button',
          }
        })
        return;
      } 
      setStepId(stepId+1);
    } else if (stepId === 2) {
      if(!inputData.isUserConfirm) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: '이메일 중복 확인 및 인증을 해주세요.',
          customClass: {
            confirmButton: 'swal-confirm-button',
          }
        })
        return;
      } 
      setStepId(stepId+1);
    } else if (stepId === 3) {
      if( inputData.userNickname === '') {
        Swal.fire({
          icon: 'warning',
          text: '닉네임을 정하지 않았습니다, 그대로 진행하시겠습니까?',
          cancelButtonText: '닉네임 정하기',
          showCancelButton: true,
          customClass: {
            confirmButton: 'swal-confirm-button',
            cancelButton: 'swal-cancel-button',
          }
        }).then((result) => {
          if (result.isConfirmed) {
            setStepId(stepId+1);
          }
          return;
        })
        
      } else {
        Swal.fire({
          icon: 'warning',
          text: `닉네임을 ${inputData.userNickname}으로 정하시겠습니까?`,
          cancelButtonText: '다시 정하기',
          showCancelButton: true,
          customClass: {
            confirmButton: 'swal-confirm-button',
            cancelButton: 'swal-cancel-button',
          }
        }).then((result) => {
          if (result.isConfirmed) {
            setStepId(stepId+1);
          } else { 
            setInputData({
              ...inputData,
              userNickname: ''
            })
          }
          return;
        })
      } 
    } else {
      if ( inputData.password !== inputData.confirmPassword ) {
        Swal.fire({
          icon: 'error',
          text: `비밀번호가 일치하지 않습니다.`,
          customClass: {
            confirmButton: 'swal-confirm-button',
          }
        })
        return;
      }
    }
  }

  return (
    <div className="container">
      <div>
        <img className="close" src="assets/images/icons/close.svg" />
      </div>
      <Steper 
        stepId={stepId}
      />
      {steps[stepId-1][stepId]}
      <footer className="footer-login-sumit">
        <StButton 
          buttonText = 'NEXT'
          textSize = '1.1rem'
          handler = { handleStepNext }
          type='button'
        />
      </footer>
    </div>
  );
}
