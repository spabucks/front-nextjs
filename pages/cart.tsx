import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import axios from "axios";

import Logincheck from "@/components/ui/Logincheck";
import CartList from "@/components/pages/cart/CartList";
import CartMenu from "@/components/pages/cart/CartMenu";
import CartFooter from "@/components/pages/cart/CartFooter";
import ModalCartCountChange from "../components/pages/cart/ModalCartCountChange";

import { cartListType, cartType } from "@/types/cartTypes";
import SecondHeader from "@/components/layouts/SecondHeader";

import { cartListState } from "@/state/cartListState";
import { modal } from "@/state/modal";
import { userState } from "@/state/userState";
import { cartFetchCheck } from "@/state/cartFetchCheck";

export default function Cart() {
  const [cartList, setCartList] = useRecoilState<cartType>(cartListState);
  const fetchCheck = useRecoilValue(cartFetchCheck);
  const [ischangemodal, setIsChangeModal] = useRecoilState<Boolean>(modal);
  const [isChangeCount, setIsChangeCount] = useState<Boolean>(false);
  const [loginData, setLoginData] = useRecoilState(userState);

  useEffect(() => {
    const BaseUrl = process.env.baseApiUrl;
    axios
      .get(`${BaseUrl}/api/v1/cart/get/v2`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        if (res.status === 200) {
          setCartList({
            cartTotal: res.data.data,
            cartListFreeze: res.data.data.filter(
              (item: cartListType) => item.bigCategoryId === 1
            ),
            cartList: res.data.data.filter(
              (item: cartListType) => item.bigCategoryId !== 1
            ),
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isChangeCount, fetchCheck]);

  return (
    <>
      {ischangemodal === true /*&& loginData.isLogin === true*/ ? (
        <ModalCartCountChange
          isChangeCount={isChangeCount}
          setIsChangeCount={setIsChangeCount}
        />
      ) : (
        ischangemodal === false && (
          /*loginData.isLogin === true &&*/ <>
            <SecondHeader title={"온라인스토어"}></SecondHeader>
            <CartMenu />
            {cartList.cartList.length === 0 &&
            cartList.cartListFreeze.length === 0 ? (
              ""
            ) : (
              <>
                <CartList />
                <CartFooter />
              </>
            )}
          </>
        )
      )}
      {loginData.isLogin === false && (
        <>
          <SecondHeader title={"온라인스토어"}></SecondHeader>
          <Logincheck></Logincheck>
        </>
      )}
    </>
  );
}
