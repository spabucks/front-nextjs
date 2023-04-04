import FirstHeader from "@/components/sections/FirstHeader";
import React from "react";
import SecondHeader from "@/components/layouts/SecondHeader";
import { useState } from "react";
import { shippingListType } from "@/types/shipping";
import { useEffect } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { deliveryChangeModal } from "@/state/deliveryChangeModal";
import { orderProductType } from "@/types/orderProduct";
import { totalOrderProductType } from "@/types/orderProduct";
export default function paymentCompleted() {
  const [shippingData, setShippingData] = useState<shippingListType[]>([]);
  const [totalOrderData, setTotalOrderData] = useState<totalOrderProductType[]>(
    []
  );
  const [totalsum, setTotalsum] = useState<number>();
  const [orderCheck, setorderCheck] = useState<boolean>(false);
  //배송지 조회
  useEffect(() => {
    const BaseUrl = process.env.baseApiUrl;
    axios
      .get(`${BaseUrl}/api/v1/shipping/get`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        setShippingData(res.data.data);
        // setShippingCheck(!shippingCheck);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [orderCheck]);

  const basicaddress = shippingData[0];
  //임시 저장용 구매 테이블 조회
  useEffect(() => {
    const BaseUrl = process.env.baseApiUrl;
    axios
      .get(`${BaseUrl}/api/v1/purchaseHistory/get`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        console.log("resssssssssssssssssㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ", res);
        setTotalOrderData(res.data.data[0].list);
        setTotalsum(res.data.data[0].sum);
        setorderCheck(!orderCheck);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //   console.log("totalOrderDatatotalOrderDatatotalOrderData", totalOrderData);

  return (
    <>
      <div className="container">
        <SecondHeader title={"온라인스토어"} />
        <form className="payment-info-form">
          <div className="payment-info-header">
            <div className="payment-info-title">
              <h1>주문이 완료되었습니다.</h1>
            </div>
          </div>
          <div className="pay-info-address-form-title">
            <p>배송정보</p>
          </div>
          {shippingData.length !== 0 && (
            <div className="pay-address-info">
              <h5>
                {basicaddress.recipient}({basicaddress.name})
              </h5>
              <p>
                {basicaddress.defaultAddress}
                <br />
                {basicaddress.phoneNum}
              </p>
            </div>
          )}
          <div className="payment-product-list-form">
            <div className="payment-product-list">
              <p>
                주문상품
                <span style={{ color: "rgb(0, 167, 98)" }}>
                  ({totalOrderData.length})
                </span>
              </p>
            </div>

            <div className="payment-product-wrap-lists">
              {totalOrderData &&
                totalOrderData.map((item) => (
                  <div className="payment-productlist">
                    <img
                      className="red-img"
                      src={item.image}
                      alt="상품이미지"
                      width={20}
                      height={20}
                    />
                    <div className="payment-productlist-info">
                      <p>{item.productName}</p>
                      <p>주문수량 : {item.amount}개</p>
                      <p>{item.sum.toLocaleString()}원</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="payment-total-wrap-list">
            <div className="payment-total-wrap">
              <p>결제 금액</p>
              <div className="payment-total-won">
                <p>{totalsum?.toLocaleString()}원</p>
                <img
                  className="pay-info-right-img"
                  src="assets/images/icons/left-chevron.svg"
                />
              </div>
            </div>
          </div>
          <div className="payment-total-sum-list">
            <div className="payment-total-sum">
              <p>신용카드</p>
              <p>{totalsum?.toLocaleString()}원</p>
            </div>
          </div>
        </form>
        <div className="footer-charge-total-btn">
          <button type="button">상세정보 확인</button>
          <button type="button">메인으로 가기</button>
        </div>
      </div>
    </>
  );
}
