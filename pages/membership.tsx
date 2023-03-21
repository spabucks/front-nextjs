import React from "react";

export default function membership() {
  return (
    <>
      <div className="container">
        <div>
          <img className="close" src="assets/images/icons/close.svg" />
        </div>

        <div className="main-membership-section">
          <div className="main-membership-img">
            <img
              src="https://www.starbucks.co.kr/common/img/common/logo.png"
              alt=""
            />
            <h1>
              고객님 <br />
              환영합니다!
            </h1>
          </div>

          <form className="agree-check-form">
            <div className="agree-check">
              <div className="m-agree">
                <input type="checkbox" id="agree" name="agree" />
                <label>약관 전체동의</label>
                <hr />
              </div>
            </div>
            <div className="m-check">
              <div className="m-check-list">
                <div>
                <input type="checkbox" id="agree" name="agree" />
                <label>이용약관 동의(필수)</label>
                </div>
                <img src="assets/images/icons/left-chevron.svg" alt="" className="membership-firststep-arrow" />
              </div>
              <div className="m-check-list">
              <div>
                <input type="checkbox" id="agree" name="agree" />
                <label>개인정보 수집 및 이용동의(필수)</label>
                </div>
                <img src="assets/images/icons/left-chevron.svg" alt="" className="membership-firststep-arrow" />
              </div>
              <div className="m-check-list">
              <div>
                <input type="checkbox" id="agree" name="agree" />
                <label>광고성 정보 수신동의(선택)</label>
                </div>
                <img src="assets/images/icons/left-chevron.svg" alt="" className="membership-firststep-arrow" />
              </div>
              <div className="m-choice"> 
              <p>광고성 정보 수신 방법(선택)</p>
                <br />
                <input type="checkbox" value="agree" /> 
                <label className="label-email">E-mail</label>
                <input type="checkbox" value="agree" />
                <label className="label-sms">SMS</label>
              </div>
            </div>
            <div className="main-membership-submit">
              <button type="submit">다음</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
