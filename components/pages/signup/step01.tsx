import React from "react";

export default function step01() {
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
