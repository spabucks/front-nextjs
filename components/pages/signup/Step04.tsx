import { inputRegisterType } from "@/types/UserRequest/Request";
import React from "react";
import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
interface ChildProps {
  inputData: inputRegisterType;
  setInputData: React.Dispatch<React.SetStateAction<inputRegisterType>>;
}

export default function Step04({ inputData, setInputData }: ChildProps) {
  const BaseUrl = process.env.baseApiUrl;
  // ID (4~20자리, 첫글자 숫자 X) /^[A-Za-z]{1}[A-Za-z0-9]{3,19}$/
  const UserIdreExp = /^[A-Za-z]{1}[A-Za-z0-9]{3,19}$/;
  const [userIdConfirm, setUserIdConfirm] = useState<number>(0);
  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (!UserIdreExp.test(value)) {
      setUserIdConfirm(2); //ID 양식이 틀림
    }
    if (e.target.value === "") {
      setUserIdConfirm(3); //공백일 경우
    } else if (UserIdreExp.test(value)) {
      setUserIdConfirm(1);
      setInputData({
        ...inputData,
        [name]: value,
      });
    }
  };

  useEffect(() => {
    console.log(inputData);
  }, [inputData]);

  // 비밀번호 (최소 8자리, 숫자,문자,특수문자 최소 1개)
  // /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/
  const UserPasswordreExp =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
  const [userPasswordConfirm, setUserPasswordConfirm] = useState<number>(0);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordCurrent = e.target.value;
    if (!UserPasswordreExp.test(passwordCurrent)) {
      setUserPasswordConfirm(2); //비밀번호 양식이 틀림
    }
    if (e.target.value === "") {
      setUserPasswordConfirm(3); //공백일 경우
    } else if (UserPasswordreExp.test(passwordCurrent)) {
      setUserPasswordConfirm(1);
      setInputData({
        ...inputData,
        password: passwordCurrent,
      });
    }
  };

  const [userPasswordCheck, setUserPasswordCheck] = useState<number>(0);

  const onChangePasswordConfirm = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const passwordConfirmCurrent = e.target.value;
      console.log(passwordConfirmCurrent);
      console.log(e.target.value);
      if (inputData.password === passwordConfirmCurrent) {
        setUserPasswordCheck(1);
        setInputData({
          ...inputData,
          confirmPassword: passwordConfirmCurrent,
        });
      }
      if (passwordConfirmCurrent === "") {
        setUserPasswordCheck(3); //공백일 경우
      }
      if (inputData.password !== passwordConfirmCurrent) {
        setUserPasswordCheck(2);
      }
    },
    [inputData.password]
  );

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
              {userIdConfirm === 2 && (
                <p
                  style={{ color: "red", fontSize: "10px", margin: "3px 0px" }}
                >
                  아이디는 4~13자리로 입력해주세요
                </p>
              )}
              {userIdConfirm === 1 && (
                <p
                  style={{ color: "grey", fontSize: "10px", margin: "3px 0px" }}
                >
                  올바른 형식입니다
                </p>
              )}
              {userIdConfirm === 3 && (
                <p
                  style={{ color: "red", fontSize: "10px", margin: "3px 0px" }}
                >
                  아이디를 입력해주세요
                </p>
              )}
              {userIdConfirm === 0 && (
                <p
                  style={{
                    color: "grey",
                    fontSize: "10px",
                    opacity: 0,
                    margin: "3px 0px",
                  }}
                ></p>
              )}
            </div>
          </div>
          <div className="idfw-body-form-input">
            <div className="p-check">
              <div>
                <input
                  type="password"
                  placeholder="비밀번호(최소 8자리, 숫자,문자,특수문자 최소 1개 포함 필수)"
                  name="password"
                  onChange={handlePasswordChange}
                />
                {userPasswordConfirm === 2 && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "10px",
                      margin: "3px 0px",
                    }}
                  >
                    비밀번호는 최소 8자리, 숫자,문자,특수문자 최소 1개가
                    필요합니다.
                  </p>
                )}
                {userPasswordConfirm === 1 && (
                  <p
                    style={{
                      color: "grey",
                      fontSize: "10px",
                      margin: "3px 0px",
                    }}
                  >
                    올바른 형식입니다
                  </p>
                )}
                {userPasswordConfirm === 3 && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "10px",
                      margin: "3px 0px",
                    }}
                  >
                    비밀번호를 입력해주세요
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="idfw-body-form-input">
            <div className="pass-check">
              <div>
                <input
                  type="password"
                  placeholder="비밀번호 확인"
                  name="confirmPassword"
                  onChange={onChangePasswordConfirm}
                />
                {userPasswordCheck === 1 && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "10px",
                      margin: "3px 0px",
                    }}
                  >
                    비밀번호를 똑같이 입력했어요
                  </p>
                )}
                {userPasswordCheck === 2 && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "10px",
                      margin: "3px 0px",
                    }}
                  >
                    비밀번호가 틀려요. 다시 확인해주세요 ㅜ ㅜ
                  </p>
                )}
                {userPasswordCheck === 3 && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "10px",
                      margin: "3px 0px",
                    }}
                  >
                    비밀번호를 한번 더 입력해주세요!
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
