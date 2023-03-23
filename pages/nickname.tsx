import React from "react";

export default function nickname() {
  return (
    <>
      <div className="nick-check-stepline-container">
        <div className="check-stepline-close">
          <img className="nick-back" src="assets/images/icons/close.svg" />
          <div className="check-stepline-number">
            <p>1</p>
            <div className="dash"></div>
            <p>2</p>
            <div className="dash"></div>
            <p className="active">3</p>
          </div>
        </div>
        <form className="main-nick-form">
          <div className="nick-header">
            <div className="main-nick-title"></div>
            <h1>
              닉네임을
              <br />
              입력해 주세요.
            </h1>
            <div className="nick-check-all">
              <div className="agree-check-all">
                <input type="checkbox" id="nickgree" name="agree" />
                <label> 선택적 개인정보 수집동의 및 이용약관</label>
              </div>
              <img
                className="nick-right-img"
                src="assets/images/icons/left-chevron.svg"
                alt=""
              />
            </div>
          </div>
          <div className="nickgree-body">
            <div className="nickgree-body-form">
              <div className="nickgree-body-form-input">
                <input type="text" placeholder="닉네임 (한글 6자리 이내)" />
              </div>
            </div>
          </div>
          <div className="nick-find">
            <p>
              &bull; 매장에서 주문한 메뉴를 찾으실 때, 등록한 닉네임으로 불러
              드립니다.
            </p>
          </div>
        </form>
      </div>
      <div className="nick-jump">
        <p>건너뛰기</p>
      </div>
      <div className="main-nickname-submit">
        <button type="submit">다음</button>
      </div>
    </>
  );
}
