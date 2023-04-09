import React, { useState, useEffect } from "react";
import Rightarrow from "@/components/ui/Rightarrow";
import { inputRegisterType } from "@/types/UserRequest/Request";
interface ChildProps {
  inputData: inputRegisterType;
  setInputData: React.Dispatch<React.SetStateAction<inputRegisterType>>;
}
interface errType {
  userNickName: string;
}
export default function Step03({ inputData, setInputData }: ChildProps) {
  const NickreExp = /^[가-힣]{2,6}$/;

  const [errMsg, setErrMsg] = useState<errType>({
    userNickName: "",
  });

  const handleNickChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (!NickreExp.test(e.target.value)) {
      setErrMsg({
        ...errMsg,
        userNickName: "닉네임 형식이 올바르지 않습니다.",
      }); //닉네임 양식이 틀림
      return;
    }
    setErrMsg({
      ...errMsg,
      userNickName: "",
    }); //
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const onehandleNickCheck = (check: boolean) => {
    setInputData({
      ...inputData,
      isNickAgree: !check,
    });
  };
  return (
    <div className="main-nick-form">
      <div className="nick-header">
        <div className="main-nick-title">
          <h1>
            닉네임을
            <br />
            입력해 주세요.
          </h1>
        </div>
        <div className="nick-check-all">
          <div
            className={
              inputData.isNickAgree
                ? "select-agree-check-service"
                : "agree-check-service"
            }
            onClick={() => onehandleNickCheck(inputData.isNickAgree)}
          ></div>
          <div>선택적 개인정보 수집동의 및 이용약관</div>
          <Rightarrow />
        </div>
      </div>
      <div className="nickgree-body">
        <div className="nickgree-body-form">
          <div className="nickgree-body-form-input">
            <div>
              <input
                className="nick-input"
                type="text"
                placeholder="닉네임 (한글 6자리 이내)"
                name="userNickname"
                onChange={handleNickChange}
              />
              <p style={{ fontSize: "0.8rem", color: "red" }}>
                {errMsg.userNickName}
              </p>
            </div>
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
