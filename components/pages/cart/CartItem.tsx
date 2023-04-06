import React, { useState } from "react";
import { useRecoilState } from "recoil";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";

import { cartListType } from "@/types/cartTypes";
import { cartType } from "@/types/cartTypes";

import { cartListState } from "@/state/cartListState";
import { cartOrderState } from "@/state/cartOrderState";
import { modal } from "@/state/modal";
import { userState } from "@/state/userState";
import { cartFetchCheck } from "@/state/cartFetchCheck";
import CloseBtn from "@/components/ui/CloseBtn";

export default function CartItem(props: { data: cartListType }) {
  const router = useRouter();
  const [cartCheck, setCartCheck] = useRecoilState<boolean>(cartFetchCheck);
  const [cartOrder, setCartOrder] = useRecoilState(cartOrderState);
  const [cartList, setCartList] = useRecoilState<cartType>(cartListState);

  const BaseUrl = process.env.baseApiUrl;
  const [ischangemodal, setIsChangeModal] = useRecoilState<Boolean>(modal);
  const [itemclose, setItemClose] = useState<boolean>(false);
  const [loginData, setLoginData] = useRecoilState(userState);

  const handleCheck = () => {
    if (props.data.bigCategoryId === 1) {
      setCartList({
        ...cartList,
        cartListFreeze: cartList.cartListFreeze.map((item: cartListType) => {
          if (item.cartId === props.data.cartId) {
            return { ...item, check: !item.check };
          }
          return item;
        }),
        cartTotal: cartList.cartTotal.map((item: cartListType) => {
          if (item.cartId === props.data.cartId) {
            return { ...item, check: !item.check };
          }
          return item;
        }),
      });
    }
    if (props.data.bigCategoryId !== 1) {
      setCartList({
        ...cartList,
        cartList: cartList.cartList.map((item: cartListType) => {
          if (item.cartId === props.data.cartId) {
            return { ...item, check: !item.check };
          }
          return item;
        }),
        cartTotal: cartList.cartTotal.map((item: cartListType) => {
          if (item.cartId === props.data.cartId) {
            return { ...item, check: !item.check };
          }
          return item;
        }),
      });
    }
  };

  const handleDelete = () => {
    axios
      .patch(
        `${BaseUrl}/api/v1/cart/delete`,
        {
          cartId: props.data.cartId,
        },
        {
          headers: {
            Authorization: `Bearer ${loginData.accessToken}`,
          },
        }
      )
      .then((res) => {
        setCartCheck(!cartCheck);
        setItemClose(!itemclose);
        setIsChangeModal(!modal);
      });
  };

  const handleChangeTrueModal = () => {
    setCartOrder({
      ...cartOrder,
      typeId: props.data.bigCategoryId === 1 ? 1 : 0,
      itemId: props.data.cartId,
    });
    setIsChangeModal(true);
  };

  const handleDirectPayment = () => {
    const BaseUrl = process.env.baseApiUrl;
    {
      axios
        .post(
          `${BaseUrl}/api/v1/purchaseTmp/addOne`,
          {
            productId: props.data.productId,
            amount: props.data.count,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        )
        .then((res) => router.push("/payment"))
        .catch((err) => {
          console.log("err");
        });
    }
  };
  return (
    <>
      {itemclose === false ? (
        <div className="check-row">
          <div className="check-left">
            <div
              className={props.data.check ? "sbCheckBoxOn" : "sbCheckBox"}
              onClick={handleCheck}
            />
            <label htmlFor="product-check"></label>
          </div>
          <div className="product-cart-view">
            <div className="product-view">
              <Image
                src={props.data.imgUrl}
                alt="상품이미지"
                height={100}
                width={100}
              />

              <div className="product-view-info">
                <p>{props.data.productName}</p>
                <p>
                  <span>{props.data.price.toLocaleString()}</span>원
                </p>
              </div>
              <div onClick={handleDelete}>
                <CloseBtn />
              </div>
            </div>
            <div className="product-view-count-info">
              <div className="product-view-count">{`수량: ${props.data.count}개`}</div>
              <div className="product-view-charge-info">
                <p className="product-view-charge__title">주문금액</p>
                <p className="product-view-charge">
                  <span>
                    {(props.data.price * props.data.count).toLocaleString()}
                  </span>
                  원
                </p>
              </div>
              <div className="product-view-change_buy__btn">
                <button type="button" onClick={handleChangeTrueModal}>
                  주문 수정
                </button>
                <button type="button" onClick={handleDirectPayment}>
                  바로 구매
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
