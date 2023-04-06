import React, { useState, useEffect} from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import Image from "next/image";

import { useRouter } from "next/router";
import SecondHeader from "@/components/layouts/SecondHeader";

import { shippingListType } from "@/types/shipping";
import { totalOrderProductType } from "@/types/orderProduct";

import { generaldelivery } from "@/state/generaldelivery";
import { freezedelivery } from "@/state/freezedelivery";

export default function PaymentCompleted() {
  const router = useRouter();
  const [shippingData, setShippingData] = useState<shippingListType[]>([]);
  const [totalOrderData, setTotalOrderData] = useState<totalOrderProductType[]>(
    []
  );
  const basicaddress = shippingData[0];
  const [generaldeliveryCharge, setGeneralDeliveryCharge] =
    useRecoilState<number>(generaldelivery);
  const [freezedeliveryCharge, setFreezeDeliveryCharge] =
    useRecoilState<number>(freezedelivery);
  const [totalsum, setTotalsum] = useState<number>(0);
  const [orderCheck, setorderCheck] = useState<boolean>(false);

  const handleDetailBuyProduct = () => {
    router.push("/orderlists");
  };
  const handleMainDirect = () => {
    router.push("/");
  };

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

  useEffect(() => {
    const BaseUrl = process.env.baseApiUrl;
    axios
      .get(`${BaseUrl}/api/v1/purchaseHistory/get`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        setTotalOrderData(res.data.data[0].list);
        setTotalsum(res.data.data[0].sum);
        setorderCheck(!orderCheck);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
                  <div className="payment-productlist" key={item.productName}>
                    <Image
                      className="red-img"
                      src={item.image}
                      alt="상품이미지"
                      width={190}
                      height={100}
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
                <p>
                  {(
                    totalsum +
                    generaldeliveryCharge +
                    freezedeliveryCharge
                  ).toLocaleString()}
                  원
                </p>
                <Image
                  className="pay-info-right-img"
                  src="assets/images/icons/left-chevron.svg"
                  alt={"화살표"}
                  height={20}
                  width={20}
                />
              </div>
            </div>
          </div>
          <div className="payment-total-sum-list">
            <div className="payment-total-sum">
              <p>신용카드</p>
              <p>
                {(
                  totalsum +
                  generaldeliveryCharge +
                  freezedeliveryCharge
                ).toLocaleString()}
                원
              </p>
            </div>
          </div>
        </form>
        <div className="footer-charge-total-btn">
          <button type="button" onClick={handleDetailBuyProduct}>
            상세정보 확인
          </button>
          <button type="button" onClick={handleMainDirect}>
            메인으로 가기
          </button>
        </div>
      </div>
    </>
  );
}
