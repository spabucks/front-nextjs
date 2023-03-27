import React, {useState, useEffect} from "react";
import { inputRegisterType } from "@/types/UserRequest/Request";
import { privateAgreeType } from "@/types/UserRequest/Request";
import CheckBox from "@/components/pages/signup/ui/CheckBox";
import Separator from "@/components/ui/Separator";

interface ChildProps {
  inputData: inputRegisterType;
  setInputData: React.Dispatch<React.SetStateAction<inputRegisterType>>;
}

export default function Step01({ inputData, setInputData }: ChildProps) {

  const [isAllAgree, setIsAllAgree] = useState<boolean>(false);

  // useEffect(()=> {
  //   setInputData({...inputData, privateAgree: agreeArray})
  // },[agreeArray])


  const [ agreeArray, setAgreeArray ] = useState<privateAgreeType>({} as privateAgreeType);
  const [ adOption, setAdOption ] = useState<object>([
    {id: 1, name: 'E-mail', checked: false},
    {id: 2, name: 'SMS', checked: false},
  ]);

  useEffect(()=> {
    setInputData({...inputData, privateAgree: agreeArray})
    if (
      agreeArray.isAgree &&
      agreeArray.isUseConfirm &&
      agreeArray.isAdvertisingConfirm
    ) {
      setIsAllAgree(true);
    } else {
      setIsAllAgree(false);
    }
  },[agreeArray])

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name , checked } = e.target;
    if(name === 'isAllAgree') {
      setAgreeArray({
        isAgree: checked,
        isUseConfirm: checked,
        isAdvertisingConfirm: checked,
    })} 
    else {
      setAgreeArray({
        ...agreeArray,
        [name]: checked,
      });
    }
  }

  return (
    
      

      <div className="main-membership-section">
        <div className="main-membership-img">
          <img src="assets/images/logo/logo.png" alt="" />
          <h1>
            고객님 <br />
            환영합니다!
          </h1>
        </div>

        <div className="agree-check-form">
          <div className="m-check">
          <CheckBox 
            lableText = '약관 전체동의'
            isArrow = {false}
            inputName = 'isAllAgree'
            link = '/best_cake'
            handler = { handleInput }
            value={isAllAgree}
          />
          <Separator 
            color = '#e5e5e5'
            gutter = {1}
          />
          <CheckBox 
            lableText = '이용약관 동의(필수)'
            isArrow = {true}
            inputName = 'isAgree'
            link = '/best_cake'
            handler = { handleInput }
            value = { agreeArray.isAgree }
          />
          <CheckBox 
            lableText = '개인정보 수집 및 이용동의(필수)'
            isArrow = {true}
            inputName = 'isUseConfirm'
            link = '/best_cake'
            handler = { handleInput }
            value = { agreeArray.isUseConfirm }
          />
          <CheckBox 
            lableText = '광고성 정보 수신동의(선택)'
            isArrow = {true}
            inputName = 'isAdvertisingConfirm'
            link = '/best_cake'
            handler = { handleInput }
            value = { agreeArray.isAdvertisingConfirm }
          />

            <div className="m-choice">
              광고성 정보 수신 방법(선택)
              <br />
              <input type="checkbox" value="agree" /> <label>E-mail</label>
              <input type="checkbox" value="agree" /> <label>SMS</label>
            </div>
          </div>
        </div>
      </div>
  );
}
