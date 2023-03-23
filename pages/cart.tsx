import React, { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

import CartList from "@/components/pages/cart/CartList";
import CartMenu from "@/components/pages/cart/CartMenu";
import FirstHeader from "@/components/sections/FirstHeader";
import CartFooter from "@/components/pages/cart/CartFooter";
import ModalCartCountChange from "@/components/sections/ModalCartCountChange";

import { cartListType, cartType } from "@/types/cartTypes";

import { cartListState } from "@/state/cartListState";
import { modal } from "@/state/modal";
import { cartOrderState } from "@/state/cartOrderState";
import axios from "axios";
export default function cart() {
  const setCartList = useSetRecoilState<cartType>(cartListState);
  const BaseUrl = process.env.baseApiUrl;
  const uuid: string = "85295edc-24ee-4781-b8e3-becc596b010e";

  const [cartOrder, setCartOrder] = useRecoilState(cartOrderState);
  console.log("cartOrder", cartOrder);
  const [ischangemodal, setIsChangeModal] = useRecoilState<Boolean>(modal);
  /**장바구니 조회 */
  useEffect(() => {
    axios
      .get(`${BaseUrl}/api/v1/cart/get/v2/${uuid}`)
      .then((res) => {
        console.log("res", res);
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
        <>
        {ischangemodal===true ? <ModalCartCountChange></ModalCartCountChange> :<>
        <FirstHeader />
          <CartMenu />
          <CartList />
          <CartFooter />
        
        </>}
        </>
    </>
  );
}
