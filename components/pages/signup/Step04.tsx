import { inputRegisterType } from "@/types/UserRequest/Request";
import React from "react";
import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

interface ChildProps {
  inputData: inputRegisterType;
  setInputData: React.Dispatch<React.SetStateAction<inputRegisterType>>;
}

interface errType {
  userId: string;
  userPassword: string;
  userPasswordCheck: string;
}

export default function Step04({ inputData, setInputData }: ChildProps) {
  const BaseUrl = process.env.baseApiUrl;
  // ID (4~20자리, 첫글자 숫자 X) /^[A-Za-z]{1}[A-Za-z0-9]{3,19}$/

  const UserIdreExp = /^[A-Za-z]{1}[A-Za-z0-9]{3,19}$/;
  const UserPasswordreExp =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

  const [errMsg, setErrMsg] = useState<errType>({
    userId: "",
    userPassword: "",
    userPasswordCheck: "",
  });

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (!UserIdreExp.test(value)) {
      setErrMsg({
        ...errMsg,
        userId: "아이디 형식이 올바르지 않습니다",
      });
      return;
    }
    setErrMsg({
      ...errMsg,
      userId: "",
    });
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (!UserPasswordreExp.test(value)) {
      setErrMsg({
        ...errMsg,
        userPassword: "비밀번호 형식이 올바르지 않습니다.",
      });
    } else {
      setErrMsg({
        ...errMsg,
        userPassword: "",
      });
      setInputData({
        ...inputData,
        [name]: value,
      });
    }
  };

  const handleIdConfirm = () => {
    if (errMsg.userId === "") {
      axios
        .post(`${BaseUrl}/api/v1/auth/check/loginId`, {
          loginId: inputData.loginId,
        })
        .then((res) => {
          //중복이있음
          if (res.data.data === true) {
            setErrMsg({
              ...errMsg,
              userId: "이미 존재하는 아이디 입니다.",
            });
            return;
          } else {
            Swal.fire({
              icon: "info",
              text: `사용할 수 있는 아이디입니다.`,
              customClass: {
                confirmButton: "swal-confirm-button",
              },
            });
          }
        });
    }
  };

  const onChangePasswordConfirm = 
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      console.log("name",name)
      console.log("value",value)
      const passwordConfirmCurrent = value;
      if (inputData.password === passwordConfirmCurrent) {
        setInputData({
          ...inputData,
          confirmPassword: passwordConfirmCurrent,
        });
        setErrMsg({
          ...errMsg,
          userPasswordCheck: "",
        });
      } else {
        setErrMsg({
          ...errMsg,
          userPasswordCheck: "비밀번호를 다시 입력해주세요.",
        });
        setInputData({
          ...inputData,
          confirmPassword:"",
        });
        return;
      }
    };
  

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
          <div>
            <div className="idfw-body-form-input">
              <input
                type="text"
                placeholder="아이디 (4~13자리 이내)"
                name="loginId"
                onChange={handleIdChange}
              />
              <button type="button" onClick={handleIdConfirm}>
                중복확인
              </button>
            </div>
          </div>

          <p style={{ fontSize: "0.8rem", color: "red" }}>{errMsg.userId}</p>

          <div className="idfw-body-form-input">
            <div className="p-check">
              <div>
                <input
                  type="password"
                  placeholder="비밀번호(최소 8자리, 숫자,문자,특수문자 최소 1개 포함 필수)"
                  name="password"
                  onChange={handleChangePassword}
                />
              </div>
            </div>
          </div>

          <p style={{ fontSize: "0.8rem", color: "red" }}>
            {errMsg.userPassword}
          </p>

          <div className="idfw-body-form-input">
            <div className="pass-check">
              <div>
                <input
                  type="password"
                  placeholder="비밀번호 확인"
                  name="confirmPassword"
                  onChange={onChangePasswordConfirm}
                />
                <p style={{ fontSize: "0.8rem", color: "red" }}>
                  {errMsg.userPasswordCheck}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
