import { inputRegisterType } from '@/types/UserRequest/Request';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'

import Swal from 'sweetalert2';
import Step01signupcheck from '../Step01signupcheck';
import Step02idfw from '../Step02idfw';
import Step03 from '../page/signup/Step03';
import Step04 from '../page/signup/Step04';
import Step05 from '../page/signup/Step05';
import StButton from '../ui/StButton';

export interface SignupModalProps {
  isSignupModalOpen: boolean;
  setIsSignupModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function SignupModal({ isSignupModalOpen, setIsSignupModalOpen }: SignupModalProps) {

  const [stepId, setStepId] = useState<number>(1);
  const [inputData, setInputData] = useState<inputRegisterType>({
    userEmail: '',
    userName: '',
    userNickname: '',
    birthday: new Date(),
    password: '',
    confirmPassword: '',
    phone: '',
    isUserConfirm: false,
    privateAgree: {
      isAgree: false,
      isUseConfirm: false,
      isAdvertisingConfirm: false,
    },
  });

  const steps:any = [
    { 1: <Step01signupcheck inputData={inputData} setInputData={setInputData}/> },
    { 2: <Step02idfw inputData={inputData} setInputData={setInputData}/> },
    { 3: <Step03 inputData={inputData} setInputData={setInputData}/> }
  ]

  useEffect(()=>{
    console.log(inputData)
  },[inputData])

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
    };
  }

  if ( !isSignupModalOpen ) return null;

  return (
    <div className='modalWrap'>
      <div>
        <div onClick={()=>setIsSignupModalOpen(false)}>
          <img src="/assets/images/icons/left.png" className="back-button" />
        </div>
      </div>
      {steps[stepId-1][stepId]}
      <section className="submit-container">
        <StButton
          buttonText = 'NEXT'
          textSize = '1.1rem'
          handler = { handleStepNext }
        />
      </section>
    </div>
  )
}
