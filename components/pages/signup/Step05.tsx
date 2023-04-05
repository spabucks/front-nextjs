import CloseBtn from "@/components/ui/CloseBtn";
import { inputRegisterType } from "@/types/UserRequest/Request";
import React from "react";
import Image from "next/image";

interface ChildProps {
  inputData: inputRegisterType;
  setInputData: React.Dispatch<React.SetStateAction<inputRegisterType>>;
}

export default function Step05({ inputData, setInputData }: ChildProps) {
  return (

      <div className="container">
        <div className="clear-close">
         <CloseBtn/>
        </div>

        <div className="main-clear-title">
          {inputData.userNickname ? (
            <h1>
              {inputData.userNickname}님, <br />
              회원가입이 완료되었습니다.
            </h1>
          ) : (
            <h1>
              {inputData.loginId}님, <br />
              회원가입이 완료되었습니다.
            </h1>
          )}
        </div>

        <div className="clear-result">
          <p>2023년 2월 20일 광고성 정보 수신동의 여부 처리 결과</p>
        </div>
        <div className="box-wrap">
          <div className="left-box">E-Mail 광고성 정보</div>
          <div className="right-box">수신거부</div>
        </div>
        <div className="box-wrap">
          <div className="left-box">SMS 광고성 정보</div>
          <div className="right-box">수신거부</div>
        </div>
        <div className="clear-company">
          <p>제공자: 주식회사 에스씨케이컴퍼니</p>
        </div>
        <div className="clear-total-star">
        <div className="clear-star">
          <Image className="clear-star" src="/assets/images/products/별혜택.jpg" alt="별혜택" height={100} width={1000}/>
        </div>
        <div className="clear-card">
          <Image className="clear-star"
          src="/assets/images/products/회원가입완료.jpg"
          alt="회원가입완료"
          height={300}
          width={700}
          />
        </div>
        <div className="clear-how">
          <p>
            웰컴 첫 구매 무료 음료 쿠폰과
            <br />
            별 적립 혜택을 받을 수 있는
            <br />
            방법이 궁금하시다면?
          </p>
        </div>
        </div>
      </div>

  );
}
