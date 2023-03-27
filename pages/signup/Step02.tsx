import React, {useState, useEffect} from "react";
import { inputRegisterType } from "@/types/UserRequest/Request";
import Countdown from "react-countdown";
import axios from "axios";
import Swal from "sweetalert2";

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
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        {props.minutes}:{props.seconds}
      </span>
    );
  }
};

export default function Step02({ inputData, setInputData } : ChildProps) {

    const BaseUrl = process.env.baseApiUrl;
    
    const [ confirmKey, setConfirmKey ] = useState<string>('');
    const [ confirmView, setConfirmView ] = useState<boolean>(false);
    
    
    const expression: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/g;
  
    //create email regex code
    useEffect(()=> {
      console.log(new Date())
      console.log(inputData)
    },[inputData])
  
    
  
  
    const handleChagne = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      if(name === 'confirmKey') setConfirmKey(value);
      if(name === 'userEmail' && expression.test(value)) {
        // 이메일 중복확인
        console.log('이메일 중복확인')
      }
      setInputData({
        ...inputData,
        [name]: value,
      })
    }
  
    const handleEmailCofirm = () => {
      console.log(inputData.userEmail)
      if(!expression.test(inputData.userEmail)) {
        alert('이메일 형식이 올바르지 않습니다.')
        return;
      } 
      if(inputData.userEmail === '') {
        alert('이메일을 입력해주세요.')
        return;
      }

      axios.post(`${BaseUrl}/api/v1/auth/signup/chkemail`, {
        email: inputData.userEmail
      }).then((res) => {
        console.log(res)
        if ( res.data ) {
          axios.post(`${BaseUrl}/api/v1/email/send`, {
            email: inputData.userEmail
          }).then((res) => {
            console.log(res)
          }).catch((err) => {
            console.log(err)
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: '이미 가입된 이메일입니다.',
            customClass: {
              confirmButton: 'swal-confirm-button',
            }
          })
          return ;
        }

      }).catch((err) => {
        console.log(err)
      })
      Swal.fire({
        icon: 'success',
        text: '인증번호가 전송되었습니다.',
        customClass: {
          confirmButton: 'swal-confirm-button',
        }
      })
      setConfirmView(true)
  
    }
    const handleConfirmKey = () => {
      console.log(confirmKey)
      axios.post(`${BaseUrl}/api/v1/email/check`, {
        email: inputData.userEmail,
        code: confirmKey,
      })
      .then((res) => {
        console.log(res)
        if (res.data) {
          Swal.fire({
            icon: 'success',
            text: '인증이 완료되었습니다.',
            customClass: {
              confirmButton: 'swal-confirm-button',
            }
          })
          setInputData({...inputData, isUserConfirm: true})
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: '인증번호가 올바르지 않습니다.',
            customClass: {
              confirmButton: 'swal-confirm-button',
            }
          })
          return ;
        }
      })
      .catch((err) => {
        console.log(err)
      })
    }
  

    // 타이머 표시
    // 입력 제한 횟수
    const handleCheck = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log('submit')
    }

    const time = new Date();
    time.setSeconds(time.getSeconds() + 600); // 10 minutes timer

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
            <div className="agree-check-service"></div>
            <div>본인 인증 서비스 약관 전체동의</div>
          </div>

          <div className="agree-info-wrap">
            <div className="agree-info-wrap-list">
              <p>휴대폰 본인 인증 서비스 이용약관 동의(필수)</p>
              <img
                className="agree-right-img"
                src="assets/images/icons/left-chevron.svg"
                alt=""
              />
            </div>

            <div className="agree-info-wrap-list">
              <p>휴대폰 통신사 이용약관 동의(필수)</p>
              <img
                className="agree-right-img"
                src="assets/images/icons/left-chevron.svg"
                alt=""
              />
            </div>
            <div className="agree-info-wrap-list">
              <p>개인정보 제공 및 이용 동의(필수)</p>
              <img
                className="agree-right-img"
                src="assets/images/icons/left-chevron.svg"
                alt=""
              />
            </div>
            <div className="agree-info-wrap-list">
              <p>고유식별정보 처리(필수)</p>
              <img
                className="agree-right-img"
                src="assets/images/icons/left-chevron.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="agree-body">
          <div className="agree-body-form">
            <div className="agree-body-form-input">
              <input type="text" placeholder="이름" name="userName" onChange = { handleChagne }/>
            </div>
            <div className="agree-body-form-input">
              <div className="birth">
                <input type="text" name="birthday" placeholder="생년월일 6자리" onChange = { handleChagne }/>
                {/* <p>-</p>
                <input type="password"  placeholder=""/> */}
              </div>
            </div>
          </div>
          <div className="id-email-body">
            <div className="id-email-body-form">
              <input
                type="text"
                className={ inputData.isUserConfirm ? "id-email-body-form-input disable-input" : "id-email-body-form-input" }
                name="userEmail"
                placeholder="이메일"
                onChange = { handleChagne }
              />
            </div>
            <div>
              <button className={ inputData.isUserConfirm ? "id-email-body-form-check-btn disable-input" : "id-email-body-form-check-btn" } onClick={handleEmailCofirm}>인증</button>
            </div>
          </div>
          {/* 타이머 표시는 이메일 전송 완료 확인 ok 하면 표시 하세요. */}
          {/* <Countdown date={Date.now() + 300000} renderer={renderer} /> */}
          <div className="id-email-body-form-input">
            <div className="id-number">
              <input type="text" className={ inputData.isUserConfirm ? "disable-input" : "" } placeholder="인증번호 6자리" name="confirmKey" onChange = { handleChagne }/>
              <button className={ inputData.isUserConfirm ? "email-check-botton disable-input" : "email-check-botton" } onClick={handleConfirmKey}>인증하기</button>
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
