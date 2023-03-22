import CartList from "@/components/pages/cart/CartList";
import CartMenu from "@/components/pages/cart/CartMenu";
import FirstHeader from "@/components/sections/FirstHeader";
import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { cartListType, cartType } from "@/types/caertTypes";
import { cartListState } from "@/state/cartListState";
import CartFooter from "@/components/pages/cart/CartFooter";
import axios from "axios";
import ModalCartCountChange from "@/components/sections/ModalCartCountChange";
import { ModalDatas } from "@/components/sections/cartchangcount";
import { modal } from "@/state/modal";
export default function cart() {
  const setCartList = useSetRecoilState<cartType>(cartListState);
  const BaseUrl = process.env.baseApiUrl;
  const [cartListItem, setCartListItems] =
  useRecoilState<cartType>(cartListState);
  const uuid: string = "85295edc-24ee-4781-b8e3-becc596b010e";
  const [ischangemodal, setIsChangeModal] = useRecoilState<Boolean>(modal);
  /**장바구니 조회 */
  useEffect(() => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
    axios
      .get(`${BaseUrl}/api/v1/cart/get/v2/${uuid}`)
      .then((res) => {
        setCartList({
          cartListFreeze: res.data.filter(
            (item: cartListType) => item.bigCategoryId === 1
          ),
          cartList: res.data.filter(
            (item: cartListType) => item.bigCategoryId !== 1
          ),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {ischangemodal === true ? ( 
        <>
          <ModalCartCountChange/>
        </>
      ) : (
        <>
          <FirstHeader />
          <CartMenu />
          <CartList/>
          <CartFooter />
        </>
      )}
    </>
  );
}
