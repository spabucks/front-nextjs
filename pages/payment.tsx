import React from "react";
import SecondHeader from "@/components/layouts/SecondHeader";
export default function payment() {
  return (
    <>
      <div className="pay-container">
      <SecondHeader />
        <form className="main-address-form">
          <div className="address-header">
            <div className="main-address-title">
              <h2>결제하기</h2>
              <h3>배송 정보</h3>
            </div>
          </div>
          <div className="payment-resister">
            <p>
              등록된 배송지가 없습니다.
              <br />
              배송지를 등록해 주세요.
            </p>
            <button className="address-serch">배송지 등록</button>
          </div>
          <div className="change-button-form">
            <h3>배송 정보</h3>
            <button className="change-button">변경</button>
          </div>

          <div className="pay-address-info">
            <h5>스파로스 아카데미(학원)</h5>
            <p>
              (48060) 부산광역시 해운대구 APEC로 17(우동)
              <br />
              센텀리더스마크 스파로스 아카데미 401호
              <br />
              010-0213-0622
            </p>
          </div>
          <div className="payment-info-wrap-list">
            <div className="payment-info-toggle">
              <p>상품내역</p>
              <img
                className="payment-right-img"
                src="assets/images/icons/left-chevron.svg"
                alt=""
              />
            </div>
            <div className="payment-product-wrap-list">
              <img
                className="red-img"
                src="assets/images/pic/커티스 머그1.png"
                alt=""
              />
              <p>23 커티스 쿨릭 레드 머그 355ml</p>
            </div>
          </div>

          <div className="coupon-info-wrap-list">
            <div className="payment-info-toggle">
              <p>쿠폰 및 할인</p>
              <img
                className="payment-right-img"
                src="assets/images/icons/left-chevron.svg"
                alt=""
              />
            </div>
            {/* <div className="coupon-product-wrap-list">
          <img className="pay-coupon-img" src="assets/images/icons/coupon.svg"/>
          <p>쿠폰</p>
        </div> */}
          </div>

          <div className="coupon-info-wrap-list">
            <div className="payment-info-toggle">
              <p>모바일 상품권</p>
              <img
                className="payment-right-img"
                src="assets/images/icons/left-chevron.svg"
                alt=""
              />
            </div>
          </div>
          <div className="coupon-info-wrap-list">
            <div className="payment-info-toggle">
              <div className="pay-whichone">
                <p>결제 수단</p>
              </div>
            </div>

            <div className="pay-agree-input">
              <input type="radio" id="pay-starbucks" name="pay-card" />
              <label>스타벅스 카드</label>
            </div>
            <div className="pay-agree-input">
              <input type="radio" id="pay-credit" name="pay-card" />
              <label>신용카드</label>
            </div>
          </div>

          <div className="payment-info-wrap-price">
            <div className="payment-info-price-title">
              <h4>결제 정보</h4>
            </div>
            <div className="pay-order-price-first">
              <p>주문 금액</p>
              <p>26,000원</p>
            </div>
            <div className="pay-info-order-price">
              <p>상품 금액</p>
              <p>23,000원</p>
            </div>
            <div className="pay-info-order-price">
              <p>배송비</p>
              <p>3,000원</p>
            </div>
          </div>
          <div className="payment-info-wrap-price">
            <div className="pay-order-price-first">
              <p>할인 금액</p>
              <p>0원</p>
            </div>
            <div className="payment-info-wrap-price-form">
              <p>상품 할인</p>
              <p>0원</p>
            </div>
          </div>
          <div className="payment-info-wrap-price">
            <div className="pay-order-price-first">
              <p>결제 금액</p>
              <p>26,000원</p>
            </div>
            <div className="pay-info-order-price">
              <p>모바일 상품권</p>
              <p>0원</p>
            </div>
          </div>

          <div className="final-info-wrap-price">
            <div className="final-info-price-title">
              <p>최종 결제 금액</p>
              <p>26,000원</p>
            </div>
          </div>
          {/* <!--<div className="coupon-info-wrap-list">
        <div className="payment-info-toggle">
          <div className="payment-infomation">
            <p>주문 금액</p>
            <p>26,000원</p>
            <div className="coupon-info-wrap-list">
              <div className="payment-info-toggle">
                <p>상품 금액</p>
                <p>23,000원</p>
              </div>
            </div>
          </div>
        </div>--> */}

          <div className="pay-agree">
            <div className="pay-agree-form">
              <p>
                위 주문 내용을 확인하였으며, 결제에 동의합니다.
                <br />
                (전자상거래법 8조 2항)
              </p>
            </div>
          </div>
          <div className="main-payment-submit">
            <button type="submit">26,000원 결제하기</button>
          </div>
        </form>
      </div>
    </>
  );
}
