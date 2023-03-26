import React from "react";
import { inputRegisterType } from "@/types/UserRequest/Request";
import { privateAgreeType } from "@/types/UserRequest/Request";
import { useState, useEffect } from "react";
import CheckBox from "@/components/pages/signup/ui/CheckBox";
interface ChildProps {
  inputData: inputRegisterType;
  setInputData: React.Dispatch<React.SetStateAction<inputRegisterType>>;
}

export default function Membership({ inputData, setInputData }: ChildProps) {
  const [agreeArray, setAgreeArray] = useState<privateAgreeType>(
    {} as privateAgreeType
  );
  const [adOption, setAdOption] = useState<object>([
    { id: 1, name: "E-mail", checked: false },
    { id: 2, name: "SMS", checked: false },
  ]);

  // useEffect(()=> {
  //   setInputData({...inputData, privateAgree: agreeArray})
  // },[agreeArray])

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (name === "isAllAgree") {
      setAgreeArray({
        isAgree: checked,
        isUseConfirm: checked,
        isAdvertisingConfirm: checked,
      });
    } else {
      setAgreeArray({
        ...agreeArray,
        [name]: checked,
      });
    }
  };

  return (
    <div className="container">
      <div>
        <img className="close" src="assets/images/icons/close.svg" />
      </div>

      <div className="main-membership-section">
        <div className="main-membership-img">
          <img src="assets/images/logo/logo.png" alt="" />
          <h1>
            고객님 <br />
            환영합니다!
          </h1>
        </div>

        <form className="agree-check-form">
          <div className="m-check">
            <CheckBox
              lableText="약관 전체동의"
              isArrow={false}
              inputName="isAllAgree"
              link="/best_cake"
              handler={handleInput}
            />
            <hr />
            <CheckBox
              lableText="이용약관 동의(필수)"
              isArrow={true}
              inputName="isAgree"
              link="/best_cake"
              handler={handleInput}
              value={agreeArray.isAgree}
            />

            <CheckBox
              lableText="개인정보 수집 및 이용동의(필수)"
              isArrow={true}
              inputName="isUseConfirm"
              link="/best_cake"
              handler={handleInput}
              value={agreeArray.isUseConfirm}
            />

            <CheckBox
              lableText="광고성 정보 수신동의(선택)"
              isArrow={true}
              inputName="isAdvertisingConfirm"
              link="/best_cake"
              handler={handleInput}
              value={agreeArray.isAdvertisingConfirm}
            />

            <div className="m-choice">
              광고성 정보 수신 방법(선택)
              <br />
              <input type="checkbox" value="agree" /> <label>E-mail</label>
              <input type="checkbox" value="agree" /> <label>SMS</label>
            </div>
          </div>
          <div className="main-membership-submit">
            <button type="submit">다음</button>
          </div>
        </form>
      </div>
    </div>
  );
}
