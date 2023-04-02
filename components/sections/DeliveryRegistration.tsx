import SecondHeader from "@/components/layouts/SecondHeader";
import FirstHeader from "@/components/sections/FirstHeader";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { deliveryChangeModal } from "@/state/deliveryChangeModal";
import FooterBtn from "../ui/FooterBtn";
import { useState } from "react";
import { deliveryRegisterType } from "@/types/UserRequest/Request";
import axios from "axios";
import Swal from "sweetalert2";
export default function DeliveryRegistration() {
  const [deliveryRechange, setDeliveryRechange] =
    useRecoilState(deliveryChangeModal);
  // const handleAddressPlus = () => {
  //   setDeliveryRechange(!deliveryRechange);
  // };

  const [deliveryData, setDeliveryData] = useState<deliveryRegisterType>({
    name: "",
    recipient: "",
    defaultAddress: "",
    phoneNum: "",
    content: "",
    defaultDestination: false,
  });

  useEffect(() => {}, [deliveryData]);

  const [nameConfirm, setNameConfirm] = useState<boolean>(false);
  const [recipientConfirm, setRecipientConfirm] = useState<boolean>(false);
  const [defaultAddressConfirm, setDefaultAddressConfirm] =
    useState<boolean>(false);
  const [phoneNumConfirm, setPhoneNumConfirm] = useState<boolean>(false);
  const [contentConfirm, setContentConfirm] = useState<boolean>(false);

  const handleAddressPlus = () => {
    if (
      nameConfirm === false ||
      recipientConfirm === false ||
      defaultAddressConfirm === false ||
      phoneNumConfirm === false
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "필수 항목을 동의 해주세요.",
        customClass: {
          confirmButton: "swal-confirm-button",
        },
      });
    } else {
      const BaseUrl = process.env.baseApiUrl;
      axios
        .post(`${BaseUrl}/api/v1/shipping/add`, {
          name: deliveryData.name,
          recipient: deliveryData.recipient,
          defaultAddress: deliveryData.defaultAddress,
          phoneNum: deliveryData.phoneNum,
          content: deliveryData.content,
          defaultDestination: deliveryData.defaultDestination,
        })
        .then((res) => {
          setDeliveryRechange(!deliveryRechange);
        })
        .catch((err) => console.log(err));
    }
  };

  const onehandleCheck = (check: boolean) => {
    setDeliveryData({
      ...deliveryData,
      defaultDestination: !check,
    });
  };
  const handlename = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    if (e.target.value !== "") {
      setNameConfirm(true);
      setDeliveryData({
        ...deliveryData,
        [name]: value,
      });
    }
    if (e.target.value.length === 0) {
      setNameConfirm(false);
    }
  };

  const handlerecipient = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    if (e.target.value !== "") {
      setRecipientConfirm(true);
      setDeliveryData({
        ...deliveryData,
        [name]: value,
      });
    }
    if (e.target.value === "") {
      setRecipientConfirm(false);
    }
  };
  const handledefaultAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    if (e.target.value !== "") {
      setDefaultAddressConfirm(true);
      setDeliveryData({
        ...deliveryData,
        [name]: value,
      });
    }
    if (e.target.value === "") {
      setDefaultAddressConfirm(false);
    }
  };
  const handlephoneNum = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    if (e.target.value !== "") {
      setPhoneNumConfirm(true);
      setDeliveryData({
        ...deliveryData,
        [name]: value,
      });
    }
    if (e.target.value === "") {
      setPhoneNumConfirm(false);
    }
  };

  const handlecontent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    if (e.target.value !== "") {
      setDeliveryData({
        ...deliveryData,
        [name]: value,
      });
    }
    if (e.target.value === "") {
      setContentConfirm(false);
    }
  };

  return (
    <>
      {deliveryRechange === true && (
        <div className="deliver-plus-address-container">
          <header>
            <SecondHeader title={"배송지등록"} />
          </header>
          <div className="address-regi-title">
            <h2>배송지 정보</h2>
          </div>
          <form className="address-regi-form">
            <div className="address-regi-body">
              <div className="addressbox-container">
                <div>
                  주소별칭 <span style={{ color: "green" }}>*</span>
                </div>
                <div className="address-regi-form-input">
                  <input
                    type="text"
                    onChange={handlename}
                    name="name"
                    placeholder="ex) 집, 사무실, 학교"
                  />

                  {nameConfirm === false ? (
                    <p
                      style={{
                        color: "red",
                        fontSize: "10px",
                        margin: "3px 0px",
                      }}
                    >
                      필수항목입니다.
                    </p>
                  ) : (
                    <p
                      style={{
                        color: "grey",
                        fontSize: "10px",
                        margin: "3px 0px",
                      }}
                    >
                      입력되었습니다.
                    </p>
                  )}
                </div>
              </div>
              <div className="addressbox-container">
                <div>
                  받는분 <span style={{ color: "green" }}>*</span>
                </div>
                <div className="address-regi-form-input">
                  <input
                    type="text"
                    name="recipient"
                    onChange={handlerecipient}
                  />

                  {recipientConfirm === false ? (
                    <p
                      style={{
                        color: "red",
                        fontSize: "10px",
                        margin: "3px 0px",
                      }}
                    >
                      필수항목입니다.
                    </p>
                  ) : (
                    <p
                      style={{
                        color: "grey",
                        fontSize: "10px",
                        margin: "3px 0px",
                      }}
                    >
                      입력되었습니다.
                    </p>
                  )}
                </div>
              </div>
              <div className="addressbox-container">
                <div>
                  기본주소 <span style={{ color: "green" }}>*</span>
                </div>
                <div className="address-regi-form-input">
                  <input
                    type="text"
                    name="defaultAddress"
                    onChange={handledefaultAddress}
                  />
                  {defaultAddressConfirm === false ? (
                    <p
                      style={{
                        color: "red",
                        fontSize: "10px",
                        margin: "3px 0px",
                      }}
                    >
                      필수항목입니다.
                    </p>
                  ) : (
                    <p
                      style={{
                        color: "grey",
                        fontSize: "10px",
                        margin: "3px 0px",
                      }}
                    >
                      입력되었습니다.
                    </p>
                  )}
                </div>
              </div>
              <div className="addressbox-container">
                <div>
                  연락처 <span style={{ color: "green" }}>*</span>
                </div>
                <div className="address-regi-form-input">
                  <input
                    type="text"
                    name="phoneNum"
                    onChange={handlephoneNum}
                    placeholder="ex) 010-0000-0000"
                  />
                  {phoneNumConfirm === false ? (
                    <p
                      style={{
                        color: "red",
                        fontSize: "10px",
                        margin: "3px 0px",
                      }}
                    >
                      필수항목입니다.
                    </p>
                  ) : (
                    <p
                      style={{
                        color: "grey",
                        fontSize: "10px",
                        margin: "3px 0px",
                      }}
                    >
                      입력되었습니다.
                    </p>
                  )}
                </div>
              </div>
              <div className="addressbox-container">
                <div>배송메모</div>
                <div className="address-regi-form-input">
                  <input
                    type="text"
                    name="content"
                    onChange={handlecontent}
                    placeholder="ex) 배송 전 연락 바랍니다"
                  />
                </div>
              </div>
            </div>
          </form>

          <div className="address-check-all">
            <div className="address-check-select-all">
              <div
                className={
                  deliveryData.defaultDestination
                    ? "select-agree-check-service"
                    : "agree-check-service"
                }
                onClick={() => onehandleCheck(deliveryData.defaultDestination)}
              ></div>

              <div>기본 배송지로 저장합니다.</div>
            </div>
          </div>
          {/* 
          const [nameConfirm, setNameConfirm] = useState<boolean>(false);
  const [recipientConfirm, setRecipientConfirm] = useState<boolean>(false);
  const [defaultAddressConfirm, setDefaultAddressConfirm] =
    useState<boolean>(false);
  const [phoneNumConfirm, setPhoneNumConfirm] = useState<boolean>(false);
  const [contentConfirm, setContentConfirm] = useState<boolean>(false); */}

          <div onClick={handleAddressPlus}>
            <FooterBtn title="등록하기" />
          </div>
        </div>
      )}
    </>
  );
}
