import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import Image from "next/image";

import SecondHeader from "@/components/layouts/SecondHeader";

import { orderProductType } from "@/types/orderProduct";
import { shippingListType } from "@/types/shipping";

import { generaldelivery } from "@/state/generaldelivery";
import { freezedelivery } from "@/state/freezedelivery";

export default function Payment() {
  const router = useRouter();

  const [totalOrderData, setTotalOrderData] = useState<orderProductType[]>([]);

  const [generaldeliveryCharge, setGeneralDeliveryCharge] =
    useRecoilState<number>(generaldelivery);
  const [freezedeliveryCharge, setFreezeDeliveryCharge] =
    useRecoilState<number>(freezedelivery);

  const [shippingData, setShippingData] = useState<shippingListType[]>([]);
  const [orderCheck, setorderCheck] = useState<boolean>(false);

  const basicaddress = shippingData[0];
  const totalProduct = totalOrderData
    .map((i) => i.price * i.count)
    .reduce((sum, charge) => (sum += charge), 0);

  const handleDeliveryClick = () => {
    router.push("/delivery");
  };

  const handlePaymentClick = () => {
    const BaseUrl = process.env.baseApiUrl;
    axios
      .post(
        `${BaseUrl}/api/v1/purchaseHistory/add`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then((res) => {
        console.log("성공");
        router.push("/paymentcompleted");
        Swal.fire({
          icon: "info",
          title: "결제가 완료되었습니다.",
          customClass: {
            confirmButton: "swal-confirm-button",
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    const BaseUrl = process.env.baseApiUrl;
    axios
      .get(`${BaseUrl}/api/v1/purchaseTmp/get`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        const item = res.data.data;
        setTotalOrderData([...item]);
        setorderCheck(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [orderCheck]);

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
      })
      .catch((err) => {
        console.log(err);
      });
  }, [orderCheck]);

  return (
    <>
      <div className="pay-container">
        <SecondHeader title={"온라인스토어"} />
        <form className="main-address-form">
          <div className="address-header">
            <h1>결제하기</h1>
            <div className="main-address-title">
              <h3>배송 정보</h3>
            </div>
          </div>
          {shippingData.length === 0 && (
            <div className="payment-resister">
              <p>
                등록된 배송지가 없습니다.
                <br />
                배송지를 등록해 주세요.
              </p>
              <button className="address-serch" onClick={handleDeliveryClick}>
                배송지 등록
              </button>
            </div>
          )}
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
          <div className="payment-info-wrap-list">
            <div className="payment-info-toggle">
              <p>상품내역</p>
              <Image
                className="payment-right-img"
                src="assets/images/icons/left-chevron.svg"
                alt="내역보기"
                height={20}
                width={20}
              />
            </div>
            <div className="payment-product-wrap-lists">
              {totalOrderData &&
                totalOrderData.map((item) => (
                  <div className="payment-productlist" key={item.cartId}>
                    <Image
                      className="red-img"
                      src={item.imgUrl}
                      alt="상품이미지"
                      width={20}
                      height={20}
                    />

                    <div className="payment-productlist-info">
                      <p>{item.productName}</p>
                      <p>주문수량 : {item.count}개</p>
                      <p className="payment-productlist-charge">
                        {(item.price * item.count).toLocaleString()}원
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="coupon-info-wrap-list">
            <div className="pay-whichone">
              <p>결제 수단</p>
            </div>
            <div className="pay-agree-input">
              <input type="radio" id="pay-credit" name="pay-card" />
              <label>신용카드</label>
            </div>
          </div>
          <div className="payment-info-price-title">
            <p>결제 정보</p>
          </div>

          <div className="payment-info-wrap-price">
            <div className="pay-order-price-first">
              <p>주문 금액</p>
              <p>
                {(
                  totalProduct +
                  generaldeliveryCharge +
                  freezedeliveryCharge
                ).toLocaleString()}
                원
              </p>
            </div>
            <div className="pay-info-order-price">
              <p>상품 금액</p>
              <p>{totalProduct.toLocaleString()}원</p>
            </div>
            <div className="pay-info-order-price">
              <p>배송비</p>
              <p>
                {(
                  generaldeliveryCharge + freezedeliveryCharge
                ).toLocaleString()}
                원
              </p>
            </div>
          </div>
          <div className="final-info-wrap-price">
            <div className="final-info-price-title">
              <p>최종 결제 금액</p>
              <p>
                {(
                  totalProduct +
                  generaldeliveryCharge +
                  freezedeliveryCharge
                ).toLocaleString()}
                원
              </p>
            </div>
          </div>
          <div className="pay-agree">
            <div className="pay-agree-form">
              <p>
                위 주문 내용을 확인하였으며, 결제에 동의합니다.
                <br />
                (전자상거래법 8조 2항)
              </p>
            </div>
          </div>
        </form>
        <div className="main-payment-submit">
          <button type="submit" onClick={handlePaymentClick}>
            {(
              totalProduct +
              generaldeliveryCharge +
              freezedeliveryCharge
            ).toLocaleString()}
            원 결제하기
          </button>
        </div>
      </div>
    </>
  );
}
