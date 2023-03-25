import React from "react";

export default function Step03() {
  return (
    <>
      <div className="check-stepline-container">
        <div className="check-stepline-close">
          <img src="assets/images/icons/close.svg" />
          <div className="check-stepline-number">
            <p>1</p>
            <div className="dash"></div>
            <p className="active">2</p>
            <div className="dash"></div>
            <p>3</p>
          </div>
        </div>
        <form className="main-idfw-section">
          <div className="main-idfw-img">
            <h1>
              아이디와 비밀번호를
              <br />
              입력해 주세요.
            </h1>
          </div>
          <div className="idfw-body">
            <div className="idfw-body-form">
              <div className="idfw-body-form-input">
                <input type="text" placeholder="아이디 (4~13자리 이내)" />
              </div>
              <div className="idfw-body-form-input">
                <div className="p-check">
                  <input
                    type="password"
                    placeholder="비밀번호 (10~20자리 이내)"
                  />
                </div>
              </div>
              <div className="idfw-body-form-input">
                <div className="pass-check">
                  <input type="password" placeholder="비밀번호 확인" />
                </div>
              </div>
            </div>
          </div>
          <div className="main-idfw-submit">
            <button type="submit">다음</button>
          </div>
        </form>
      </div>
    </>
  );
}
