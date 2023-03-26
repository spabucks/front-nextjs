import { inputRegisterType } from '@/types/UserRequest/Request';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'

import Swal from 'sweetalert2';
import Membership from '@/pages/membership';
import Step01 from '../../../../pages/Step01';
import Step02 from '../../../../pages/Step02';
import Step03 from '../../../../pages/Step03';
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
    { 1: <Membership inputData={inputData} setInputData={setInputData}/> },
    { 2: <Step01 inputData={inputData} setInputData={setInputData}/> },
    { 3: <Step02 inputData={inputData} setInputData={setInputData}/> },
    { 3: <Step03 inputData={inputData} setInputData={setInputData}/> },
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
