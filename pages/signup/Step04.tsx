import { inputRegisterType } from "@/types/UserRequest/Request";
import React from "react";

interface ChildProps {
  inputData: inputRegisterType;
  setInputData: React.Dispatch<React.SetStateAction<inputRegisterType>>;
}

export default function Step04({ inputData, setInputData } : ChildProps) {

  const BaseUrl = process.env.baseApiUrl;

  const handleChagne = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    console.log(e.target.focus())

    setInputData({
      ...inputData,
      [name]: value,
    }); 

    if( name === 'loginId' && value.length > 3 && value.length < 14 ) {
      console.log('아이디가 4~13자리 이내입니다.');
    }

  }
  

  return (
    
        <div className="main-idfw-section">
          <div className="main-idfw-img">
            <h1>
              아이디와 비밀번호를
              <br />
              입력해 주세요.
            </h1>
          </div>
          <div className="idfw-body">
            <div className="idfw-body-form">
              <div className="idfw-body-form-input">
                <input type="text" placeholder="아이디 (4~13자리 이내)" name="loginId" onChange={handleChagne}/>
              </div>
              <div className="idfw-body-form-input">
                <div className="p-check">
                  <input
                    type="password"
                    placeholder="비밀번호 (10~20자리 이내)"
                    name="password"
                    onChange={handleChagne}
                  />
                </div>
              </div>
              <div className="idfw-body-form-input">
                <div className="pass-check">
                  <input type="password" placeholder="비밀번호 확인" 
                  name="passwordCheck" onChange={handleChagne}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}
