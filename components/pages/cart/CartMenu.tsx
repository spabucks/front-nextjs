import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";
import Image from "next/image";
import { useRecoilState } from "recoil";

import { modal } from "@/state/modal";
import { cartListState } from "@/state/cartListState";
import { userState } from "@/state/userState";
import { cartFetchCheck } from "@/state/cartFetchCheck";

import { cartBuyProduct } from "@/types/cartBuyProduct";
import { cartType } from "@/types/cartTypes";

export default function CartMenu() {
  const [cartList, setCartList] = useRecoilState<cartType>(cartListState);
  const [listAllCheck, setListAllCheck] = useState<boolean>(false);
  const [loginData, setLoginData] = useRecoilState(userState);
  const [cartCheck, setCartCheck] = useRecoilState<boolean>(cartFetchCheck);
  const [totalBuyItems, setTotalBuyItmes] = useRecoilState(cartBuyProduct);

  useEffect(() => {
    let check = true;
    let freezeCheck = true;
    cartList.cartList.find((item) => item.check === false)
      ? (check = false)
      : (check = true);
    cartList.cartListFreeze.find((item) => item.check === false)
      ? (freezeCheck = false)
      : (freezeCheck = true);
    if (check && freezeCheck) {
      setListAllCheck(true);
    } else {
      setListAllCheck(false);
    }
  }, [cartList]);

  const handleAllCheck = (check: boolean) => {
    setListAllCheck(!check);
    setCartList({
      ...cartList,
      cartList: cartList.cartList.map((item) => {
        return { ...item, check: !check };
      }),
      cartListFreeze: cartList.cartListFreeze.map((item) => {
        return { ...item, check: !check };
      }),
    });
  };

  //전체 아이템 삭제
  const handleAllDelete = () => {
    const BaseUrl = process.env.baseApiUrl;
    axios
      .put(
        `${BaseUrl}/api/v1/cart/delete/all`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then((res) => {
        setCartCheck(!cartCheck);
      })
      .catch((err) => console.log("err", err));
  };

  //선택 아이템 삭제
  const handleSelecteDelete = () => {
    const BaseUrl = process.env.baseApiUrl;
    const deleteitem = totalBuyItems.map((item) => item.cartId);
    {
      axios
        .put(
          `${BaseUrl}/api/v1/cart/selectedDelete`,
          {
            cartId: deleteitem,
          },
          {
            headers: {
              Authorization: `Bearer ${loginData.accessToken}`,
            },
          }
        )
        .then((res) => {
          setCartCheck(!cartCheck);
        });
    }
  };

  return (
    <>
      {loginData.isLogin === true && (
        <section className="section-cart-top">
          <h2 className="cart-title">장바구니</h2>

          {cartList.cartList.length === 0 &&
          cartList.cartListFreeze.length === 0 ? (
            <section className="non-product-cart">
              <div className="non-product-cart-content">
                <Image
                  src="assets/images/icons/shopping-cart.svg"
                  alt="카트"
                  width={20}
                  height={20}
                />
                <p>장바구니가 비었습니다</p>
              </div>
            </section>
          ) : (
            <div className="check-row">
              <div className="check-left">
                <div
                  className={listAllCheck ? "sbCheckBoxOn" : "sbCheckBox"}
                  onClick={() => handleAllCheck(listAllCheck)}
                />
                <label htmlFor="total-product-check">전체 선택</label>
              </div>
              <div className="check-right">
                <button onClick={handleSelecteDelete}>선택삭제</button>
                <button onClick={handleAllDelete}>전체삭제</button>
              </div>
            </div>
          )}
        </section>
      )}
    </>
  );
}
