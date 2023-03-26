import { inputRegisterType } from '@/types/UserRequest/Request';
import React, {useState, useEffect } from 'react';

interface ChildProps {
  inputData: inputRegisterType;
  setInputData: React.Dispatch<React.SetStateAction<inputRegisterType>>;
}

export default function step01( { inputData, setInputData } : ChildProps) {

  const [ confirmKey, setConfirmKey ] = useState<string>('');
  const [ confirmView, setConfirmView ] = useState<boolean>(false);
  
  const MINUTES_IN_MS = 3 * 60;
  const INTERVAL = 1000;
  const [timeLeft, setTimeLeft] = useState<number>(MINUTES_IN_MS);

  const expression: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/g;

  //create email regex code

  useEffect(()=> {
    console.log(new Date())
    console.log(inputData)
  },[inputData])

  useEffect(() => {
    console.log(timeLeft)
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, INTERVAL);

    if (timeLeft <= 0) {
        clearInterval(timer);
        setTimeLeft(MINUTES_IN_MS);
        console.log('타이머가 종료되었습니다.');
    }

    return () => {
        clearInterval(timer);
    };
}, [timeLeft]);


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

    if(!expression.test(inputData.userEmail)) {
      alert('이메일 형식이 올바르지 않습니다.')
      return;
    } 
    if(inputData.userEmail === '') {
      alert('이메일을 입력해주세요.')
      return;
    }
    console.log("이메일 전송")
    setConfirmView(true)
    // 서버에 이메일 전송


  }
  const handleConfirmKey = () => {
    console.log(confirmKey)
    // 서버에 키값 확인
    // axiois.post('http://localhost:3000/api/user/confirmKey', {
    //   confirmKey: confirmKey,
    // })
    // .then((res) => {
    //   console.log(res)
    //   // 키값이 일치하면 인증완료
    // })
    // .catch((err) => {
    //   console.log(err)
    // })
  }

  const handleCheck = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit')
  }


  return (
    <div className="check-stepline-container">
      <div className="check-stepline-close">
        <img src="assets/images/icons/close.svg" />
        <div className="check-stepline-number">
          <p className="active">1</p>
          <div className="dash"></div>
          <p>2</p>
          <div className="dash"></div>
          <p>3</p>
        </div>
      </div>
      <form className="agree-form">
        <div className="agree-header">
          <div className="agree-title">
            <h1>
              본인확인을 위해
              <br />
              인증을 진행해 주세요.
            </h1>
          </div>
          <div className="agree-check-all">
            <input type="checkbox" id="agree" name="agree" />
            <label>본인 인증 서비스 약관 전체동의</label>
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
              <input type="text" placeholder="이름" />
            </div>
            <div className="agree-body-form-input">
              <div className="birth">
                <input type="password" placeholder="생년월일 6자리" />
                <p>-</p>
                <input type="password" placeholder="" />
              </div>
            </div>
          </div>
          <div className="id-email-body">
            <div className="id-email-body-form">
              <input type="text" className="id-email-body-form-input" />
            </div>
            <div className="id-ematl-total">
              <div className="id-mail-ac">
                <p>@</p>
              </div>
              <div className="id-email-body-form-input">
                <div className="id-e-data">
                  <select id="email-data" name="email-data-input">
                    <option value="직접 입력">
                      {/* <selected>직접 입력 */}
                    </option>
                    <option value="naver.com">naver.com</option>
                    <option value="gmail.com">gmail.com</option>
                    <option value="hanmail.net">hanmail.net</option>
                    <option value="nate.com">nate.com</option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <button className="id-email-body-form-check-btn">인증</button>
            </div>
          </div>
          <div className="id-email-body-form-input">
            <div className="id-number">
              <input type="text" placeholder="인증번호 6자리" />
              <button className="email-check-botton">중복확인</button>
            </div>
          </div>

          <div className="id-warning">
            <p>
              &bull; 타인의 개인정보를 도용하여 가입한 경우, 서비스 이용 제한 및
              법적 제재를 받으실 수 있습니다.
            </p>
          </div>
        </div>
        <div className="main-agree-submit">
          <button type="submit">다음</button>
        </div>
      </form>
    </div>
  );
}
