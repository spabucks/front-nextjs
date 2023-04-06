import React, { useState,useEffect } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";

import { deliveryChangeModal } from "@/state/deliveryChangeModal";

import { shippingListType } from "@/types/shipping";

import FirstHeader from "@/components/sections/FirstHeader";
import FooterBtn from "@/components/ui/FooterBtn";
import DeliveryRegistration from "@/components/sections/DeliveryRegistration";
import CloseBtn from "@/components/ui/CloseBtn";


export default function Delivery() {
  const [deliveryRechange, setDeliveryRechange] =
    useRecoilState(deliveryChangeModal);

  const handleAddressPlus = () => {
    setDeliveryRechange(!deliveryRechange);
  };
  const [shippingData, setShippingData] = useState<shippingListType[]>([]);
  const [shippingCheck, setShippingCheck] = useState<boolean>(false);

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
        setShippingCheck(!shippingCheck);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [deliveryRechange]);
  console.log("shippingDatashippingDatashippingData", shippingData);
  //배송지 삭제
  const Deletehandle = (id: number) => {
    const BaseUrl = process.env.baseApiUrl;
    const targetShippingData = shippingData.find(
      (item) => item.shippingId === id
    );
    if (!targetShippingData) {
      return;
    }
    axios
      .delete(`${BaseUrl}/api/v1/shipping/delete`, {
        data: {
          id: targetShippingData.shippingId,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then(() => {
        setShippingData(shippingData.filter((item) => item.shippingId !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {deliveryRechange === true && <DeliveryRegistration />}
      {(deliveryRechange === false && shippingData.length === 0) && (
        <div className="address-container">
          <FirstHeader />
          <div className="address-header">
            <div className="main-address-title">
              <h2>배송지 관리</h2>
            </div>
          </div>
          <form className="main-address-form">
            <div className="address-resister">
              <p>
                등록된 배송지가 없습니다.
                <br />
                배송지를 등록해 주세요.
              </p>
            </div>
          </form>
          <div onClick={handleAddressPlus}>
            <FooterBtn title={"새 배송지 추가"}></FooterBtn>
          </div>
        </div>
      )}

      {(deliveryRechange === false && shippingData.length !== 0) && (
        <>
          <div className="address-container">
            <FirstHeader />
            <div className="address-header">
              <div className="main-address-title">
                <h2>배송지 관리</h2>
              </div>
            </div>
            {shippingData.map((item, index) => (
              <>
                {index === 0 ? (
                  <div className="pay-address-info-lists-form" key={index}>
                    <div className="pay-address-info-lists">
                      <div className="pay-address-info-title">
                        <div className="pay-address-info-name">
                          {item.recipient}({item.name})
                        </div>
                        <div className="pay-address-info-check">기본</div>
                      </div>
                      <div
                        className="pay-address-info-closeBtn"
                        onClick={() => Deletehandle(item.shippingId)}
                      >
                        <CloseBtn />
                      </div>
                    </div>
                    <div className="pay-address-information">
                      <p>{item.defaultAddress}</p>
                    </div>
                    <div className="pay-address-phonenumber">
                      <p>{item.phoneNum}</p>
                    </div>
                    <div className="pay-address-phonenumber">
                      <p>{item.content}</p>
                    </div>
                  </div>
                ) : (
                  <div className="pay-address-info-lists-form" key={index}>
                    <div className="pay-address-info-lists">
                      <div className="pay-address-info-title">
                        <div className="pay-address-info-name">
                          {item.recipient}({item.name})
                        </div>
                      </div>
                      <div
                        className="pay-address-info-closeBtn"
                        onClick={() => Deletehandle(item.shippingId)}
                      >
                        <CloseBtn />
                      </div>
                    </div>
                    <div className="pay-address-information">
                      <p>{item.defaultAddress}</p>
                    </div>
                    <div className="pay-address-phonenumber">
                      <p>{item.phoneNum}</p>
                    </div>
                    <div className="pay-address-phonenumber">
                      <p>{item.content}</p>
                    </div>
                  </div>
                )}
              </>
            ))}
            <div onClick={handleAddressPlus}>
              <FooterBtn title={"새 배송지 추가"}></FooterBtn>
            </div>
          </div>
        </>
      )}
    </>
  );
}
