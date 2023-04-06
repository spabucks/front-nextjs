import React, { useState, useEffect } from "react";
import { inputRegisterType } from "@/types/UserRequest/Request";
import Countdown from "react-countdown";
import axios from "axios";
import Swal from "sweetalert2";
import SignupAgreeStatic from "./SignupAgreeStatic";

interface ChildProps {
  inputData: inputRegisterType;
  setInputData: React.Dispatch<React.SetStateAction<inputRegisterType>>;
}

interface errType {
  userEmail: string;
  userNickname: string;
  userName: string;
}

const Completionist = () => <span>시간초과</span>;

const renderer = (props: {
  hours: any;
  minutes: any;
  seconds: any;
  completed: any;
}) => {
  if (props.completed) {
    return <Completionist />;
  } else {
    return (
      <span>
        {props.minutes}:{props.seconds}
      </span>
    );
  }
};

export default function Step02({ inputData, setInputData }: ChildProps) {
  const BaseUrl = process.env.baseApiUrl;

  const [confirmKey, setConfirmKey] = useState<string>("");
  const [confirmView, setConfirmView] = useState<boolean>(false);
  const [timeShow, setTimeShow] = useState<boolean>(false);
  const EmailregExp = /^[\w]{4,}@[\w]+(\.[\w]+){1,3}$/;
  const NameregExp = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,}$/;

  const [errMsg, setErrMsg] = useState<errType>({
    userEmail: "",
    userNickname: "",
    userName: "",
  });

  const [currentCountdown, setCurrentCountDown] = useState<number>(0);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "confirmKey") setConfirmKey(value);
    if (name === "userEmail" && !EmailregExp.test(value)) {
      setErrMsg({
        ...errMsg,
        userEmail: "이메일 형식이 올바르지 않습니다.",
      });
      return;
    }
    setErrMsg({
      ...errMsg,
      userEmail: "",
    });
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleEmailCofirm = () => {
    console.log("handleEmailCofirm");
    if (errMsg.userEmail === "") {
      axios
        .post(`${BaseUrl}/api/v1/auth/signup/chkemail`, {
          email: inputData.userEmail,
        })
        .then((res) => {
          const result = res.data;
          if (result.data) {
            axios
              .post(`${BaseUrl}/api/v1/email/send`, {
                email: inputData.userEmail,
              })
              .then((res) => {

                setCurrentCountDown(Date.now() + 300000);
                Swal.fire({
                  toast: true,
                  position: "top",
                  icon: "success",
                  title: "인증번호가 전송되었습니다.",
                  showConfirmButton: false,
                  timer: 1500,
                });
                setTimeShow(true);
                setConfirmView(true);
              })
              .catch((err) => {
                console.log("err", err);
              });
          } else {
            setErrMsg({
              ...errMsg,
              userEmail: "이미 사용중인 이메일입니다.",
            });
            return;
          }
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  };

  const onehandleCheck = (check: boolean) => {
    setInputData({
      ...inputData,
      isEmailAgree: !check,
    });
  };

  const handleConfirmKey = () => {
    if (confirmKey === "") {
      Swal.fire({
        toast: true,
        position: "top",
        icon: "error",
        title: "인증번호를 입력해주세요.",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    axios
      .post(`${BaseUrl}/api/v1/email/check`, {
        email: inputData.userEmail,
        code: confirmKey,
      })
      .then((res) => {
        const result = res.data;
        if (result.data) {
          setInputData({
            ...inputData,
            isUserConfirm: true,
          });
          Swal.fire({
            toast: true,
            position: "top",
            icon: "success",
            title: "인증이 완료되었습니다.",
            showConfirmButton: false,
            timer: 1500,
          });
          setTimeShow(false)
        } else {
          Swal.fire({
            toast: true,
            position: "top",
            icon: "error",
            title: "인증번호가 일치하지 않습니다.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div className="agree-form">
      <div className="agree-header">
        <div className="agree-title">
          <h1>
            본인확인을 위해
            <br />
            인증을 진행해 주세요.
          </h1>
        </div>
        <div className="agree-check-all">
          <div
            className={
              inputData.isEmailAgree
                ? "select-agree-check-service"
                : "agree-check-service"
            }
            onClick={() => onehandleCheck(inputData.isEmailAgree)}
          ></div>
          <div>본인 인증 서비스 약관 전체동의</div>
        </div>
        <SignupAgreeStatic />
      </div>
      <div className="agree-body">
        <div className="agree-body-form">
          <div className="agree-body-form-input">
            <div>
              <input
                type="text"
                placeholder="이름"
                name="userName"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="agree-body-form-input">
            <div className="birth">
              <input
                type="text"
                name="birthday"
                placeholder="생년월일 6자리"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="id-email-body">
          <div className="id-email-body-form">
            <div>
              <input
                type="text"
                className={
                  inputData.isUserConfirm
                    ? "id-email-body-form-input disable-input"
                    : "id-email-body-form-input"
                }
                name="userEmail"
                placeholder="이메일"
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <button
              type="button"
              className={
                inputData.isUserConfirm
                  ? "id-email-body-form-check-btn disable-input"
                  : "id-email-body-form-check-btn"
              }
              style={
                errMsg.userEmail === ""
                  ? {}
                  : { opacity: 0.5, cursor: "not-allowed" }
              }
              onClick={handleEmailCofirm}
            >
              인증
            </button>
          </div>
        </div>
        <p style={{ fontSize: "0.8rem", color: "red" }}>{errMsg.userEmail}</p>
        {timeShow === true && (
          <Countdown date={currentCountdown} renderer={renderer} />
        )}

        {confirmView && (
          <div className="id-email-body-form-input">
            <div className="id-number">
              <input
                type="text"
                className={inputData.isUserConfirm ? "disable-input" : ""}
                placeholder="인증번호 6자리"
                name="confirmKey"
                onChange={handleChange}
              />
              <button
                type="button"
                className={
                  inputData.isUserConfirm
                    ? "email-check-botton disable-input"
                    : "email-check-botton"
                }
                onClick={handleConfirmKey}
              >
                인증하기
              </button>
            </div>
          </div>
        )}

        <div className="id-warning">
          <p>
            &bull; 타인의 개인정보를 도용하여 가입한 경우, 서비스 이용 제한 및
            법적 제재를 받으실 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
