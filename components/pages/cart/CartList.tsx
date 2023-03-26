import React from "react";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { cartListState } from "@/state/cartListState";
import CartItem from "./CartItem";
import { GeneralCartOrderList } from "./CartOrderList";
import FreezeCartOrderList from "./CartOrderList";
import { cartListType } from "@/types/cartTypes";


export default function CartList() {
  const [cartItems, setCartItems] = useRecoilState(cartListState);
  const [listAllCheck, setListAllCheck] = useState(false);
  const [listFreezeAllCheck, setListFreezeAllCheck] = useState(false);
  console.log('artItemsartItemsartItemsartItems',cartItems)
  useEffect(() => {
    let check = true;
    let freezeCheck = true;
    cartItems.cartList.find((item) => item.check === false)
      ? (check = false)
      : (check = true);
    cartItems.cartListFreeze.find((item) => item.check === false)
      ? (freezeCheck = false)
      : (freezeCheck = true);
    setListAllCheck(check);
    setListFreezeAllCheck(freezeCheck);
  }, [cartItems]);

  /**냉동상품 배송비 측정 */
  const handleCartListAllCheck = (check: boolean) => {
    setListAllCheck(!check);
    setCartItems({
      ...cartItems,
      cartList: cartItems.cartList.map((item: cartListType) => {
        return { ...item, check: !check };
      }),
    });
  };

  const handleFreezeCartListAllCheck = (check: boolean) => {
    setListFreezeAllCheck(!check);
    setCartItems({
      ...cartItems,
      cartListFreeze: cartItems.cartListFreeze.map((item: cartListType) => {
        return { ...item, check: !check };
      }),
    });
  };


  return (
    <>
      {cartItems.cartList.length > 0 && (
        <div className="check-row">
          <div className="check-left">
            <div
              className={listAllCheck ? "sbCheckBoxOn" : "sbCheckBox"}
              id="general-product-check"
              onClick={() => handleCartListAllCheck(listAllCheck)}
            />
            <label htmlFor="general-product-check">일반 상품</label>
          </div>
        </div>
      )}
      {cartItems.cartList.map((item: cartListType) => (
        <CartItem key={item.cartId} data={item} />
      ))}

      {cartItems.cartList.filter((item) => item.check === true).length > 0 && (
        <GeneralCartOrderList />
      )}

      {cartItems.cartListFreeze.length > 0 && (
        <div className="check-row">
          <div className="check-left">
            <div
              className={listFreezeAllCheck ? "sbCheckBoxOn" : "sbCheckBox"}
              id="general-product-check"
              onClick={() => handleFreezeCartListAllCheck(listFreezeAllCheck)}
            />
            <label htmlFor="general-product-check">냉동 상품</label>
          </div>
        </div>
      )}
      {cartItems.cartListFreeze.map((item: cartListType) => (
        <CartItem key={item.cartId} data={item} />
      ))}

      {cartItems.cartListFreeze.filter((item) => item.check === true).length >
        0 && <FreezeCartOrderList />}
  
    </>
  );
}
