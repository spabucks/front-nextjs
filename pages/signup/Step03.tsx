import { inputRegisterType } from "@/types/UserRequest/Request";
import axios from "axios";
import React from "react";

interface ChildProps {
  inputData: inputRegisterType;
  setInputData: React.Dispatch<React.SetStateAction<inputRegisterType>>;
}

export default function Step03({ inputData, setInputData } : ChildProps)  {

  const BaseUrl = process.env.baseApiUrl;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    }); 
  }


  return (
    <div className="main-nick-form">
      <div className="nick-header">
        <div className="main-nick-title"></div>
        <h1>
          닉네임을
          <br />
          입력해 주세요.
        </h1>
        <div className="nick-check-all">
          <div className="agree-check-all">
            <input type="checkbox" id="nickgree" />
            <label> 선택적 개인정보 수집동의 및 이용약관</label>
          </div>
          <img
            className="nick-right-img"
            src="assets/images/icons/left-chevron.svg"
            alt=""
          />
        </div>
      </div>
      <div className="nickgree-body">
        <div className="nickgree-body-form">
          <div className="nickgree-body-form-input">
            <input type="text" placeholder="닉네임 (한글 6자리 이내)"  name="userNickname" onChange={handleChange}/>
          </div>
        </div>
      </div>
      <div className="nick-find">
        <p>
          &bull; 매장에서 주문한 메뉴를 찾으실 때, 등록한 닉네임으로 불러
          드립니다.
        </p>
      </div>
    </div>
      
  );
}
