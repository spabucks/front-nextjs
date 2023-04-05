import React, { useState, useEffect } from "react";
import { inputRegisterType } from "@/types/UserRequest/Request";
import Countdown from "react-countdown";
import axios from "axios";
import Swal from "sweetalert2";
import Rightarrow from "@/components/ui/Rightarrow";

interface ChildProps {
  inputData: inputRegisterType;
  setInputData: React.Dispatch<React.SetStateAction<inputRegisterType>>;
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
  //create email regex code
  useEffect(() => {
    console.log(new Date());
  }, [inputData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "confirmKey") setConfirmKey(value);
    if (name === "userEmail" && EmailregExp.test(value)) {
      // 이메일 중복확인
      console.log("이메일 중복확인");
    }
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  // 이메일 유효성 검사
  const EmailregExp = /^[\w]{4,}@[\w]+(\.[\w]+){1,3}$/;
  const [emailConfirm, setEmailConfirm] = useState<number>(0);

  const checkEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (!EmailregExp.test(e.target.value)) {
      setEmailConfirm(2); //이메일 양식이 틀림
    } else {
      setEmailConfirm(1); //올바른거
      setInputData({
        ...inputData,
        [name]: value,
      });
    }
  };

  //이름 유효성검사

  const NameregExp = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,}$/;
  const [nameConfirm, setNameConfirm] = useState<number>(0);

  const checkName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (!NameregExp.test(e.target.value)) {
      setNameConfirm(2); //한글 영문만 입력 가능
    } else {
      setNameConfirm(1); //올바른거
      setInputData({
        ...inputData,
        [name]: value,
      });
    }
  };

  const handleEmailCofirm = () => {
    if (emailConfirm === 1) {
      axios
        .post(`${BaseUrl}/api/v1/auth/signup/chkemail`, {
          email: inputData.userEmail,
        })
        .then((res) => {
          console.log("res", res);
          
          if (res.data) {
            axios
              .post(`${BaseUrl}/api/v1/email/send`, {
                email: inputData.userEmail,
              })
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log("err", err);
              });
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "이미 가입된 이메일입니다.",
              customClass: {
                confirmButton: "swal-confirm-button",
              },
            });
            return;
          }
        })
        .catch((err) => {
          console.log(err);
        });

      Swal.fire({
        icon: "success",
        text: "인증번호가 전송되었습니다.",
        customClass: {
          confirmButton: "swal-confirm-button",
        },
      });
    }
  };

  const handleConfirmKey = () => {
    console.log(confirmKey);
    axios
      .post(`${BaseUrl}/api/v1/email/check`, {
        email: inputData.userEmail,
        code: confirmKey,
      })
      .then((res) => {
        console.log("res", res);
        if (res.data) {
          Swal.fire({
            icon: "success",
            text: "인증이 완료되었습니다.",
            customClass: {
              confirmButton: "swal-confirm-button",
            },
          });
          setInputData({ ...inputData, isUserConfirm: true });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "인증번호가 올바르지 않습니다.",
            customClass: {
              confirmButton: "swal-confirm-button",
            },
          });
          return;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 타이머 표시
  // 입력 제한 횟수
  const handleCheck = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
  };

  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer

  // const [isEmailAgree, setIsEmailAgree] = useState<boolean>(false);
  // console.log("isEmailAgree", isEmailAgree);

  const onehandleCheck = (check: boolean) => {
    setInputData({
      ...inputData,
      isEmailAgree: !check,
    });
    // setIsEmailAgree(!check);
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

        <div className="agree-info-wrap">
          <div className="agree-info-wrap-list">
            <p>휴대폰 본인 인증 서비스 이용약관 동의(필수)</p>
            <Rightarrow />
          </div>

          <div className="agree-info-wrap-list">
            <p>휴대폰 통신사 이용약관 동의(필수)</p>
            <Rightarrow />
          </div>
          <div className="agree-info-wrap-list">
            <p>개인정보 제공 및 이용 동의(필수)</p>
            <Rightarrow />
          </div>
          <div className="agree-info-wrap-list">
            <p>고유식별정보 처리(필수)</p>
            <Rightarrow />
          </div>
        </div>
      </div>
      <div className="agree-body">
        <div className="agree-body-form">
          <div className="agree-body-form-input">
            <div>
              <input
                type="text"
                placeholder="이름"
                name="userName"
                onChange={checkName}
              />
              {nameConfirm === 2 && (
                <p
                  style={{ color: "red", fontSize: "10px", margin: "3px 0px" }}
                >
                  한글 2글자 이상 입력 가능합니다.
                </p>
              )}
              {nameConfirm === 1 && (
                <p
                  style={{ color: "grey", fontSize: "10px", margin: "3px 0px" }}
                >
                  올바른 형식입니다
                </p>
              )}
              {nameConfirm === 0 && (
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
                onChange={checkEmail}
              />
              {emailConfirm === 2 && (
                <p
                  style={{ color: "red", fontSize: "10px", margin: "3px 0px" }}
                >
                  이메일 양식을 확인해주세요
                </p>
              )}
              {emailConfirm === 1 && (
                <p
                  style={{ color: "grey", fontSize: "10px", margin: "3px 0px" }}
                >
                  올바른 형식입니다
                </p>
              )}
              {emailConfirm === 0 && (
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

          <div>
            {emailConfirm === 1 ? (
              <button
                className={
                  inputData.isUserConfirm
                    ? "id-email-body-form-check-btn disable-input"
                    : "id-email-body-form-check-btn"
                }
                onClick={handleEmailCofirm}
              >
                인증
              </button>
            ) : (
              <button
                style={{ opacity: 0.5 }}
                className={
                  inputData.isUserConfirm
                    ? "id-email-body-form-check-btn disable-input"
                    : "id-email-body-form-check-btn"
                }
                onClick={handleEmailCofirm}
              >
                인증
              </button>
            )}
          </div>
        </div>
        {/* 타이머 표시는 이메일 전송 완료 확인 ok 하면 표시 하세요. */}
        {timeShow === true && (
          <Countdown date={Date.now() + 300000} renderer={renderer} />
        )}

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
