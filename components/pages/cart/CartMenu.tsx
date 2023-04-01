import React from "react";
import { useState,useEffect } from "react";
import { useRecoilState } from "recoil";
import { cartType } from "@/types/cartTypes";
import { cartListState } from "@/state/cartListState";
import { userState } from "@/state/userState";
import axios from "axios";
import { cartFetchCheck } from "@/state/cartFetchCheck";
export default function CartMenu() {
  const [cartList, setCartList] = useRecoilState<cartType>(cartListState);
  const [listAllCheck, setListAllCheck] = useState<boolean>(false);
  const BaseUrl = process.env.baseApiUrl;
  const [loginData, setLoginData] = useRecoilState(userState);
  const [cartCheck, setCartCheck] = useRecoilState<boolean>(cartFetchCheck)
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

  const handleAllDelete = () => {
    axios
    .put(`${BaseUrl}/api/v1/cart/delete/all`, {}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        setCartCheck(!cartCheck)
       console.log("성공")
   
      }).catch((err)=>
      console.log('err',err));
  };

  return (
    <>
    {loginData.isLogin===true && 
      <section className="section-cart-top">
      <h2 className="cart-title">장바구니</h2>
      { cartList.cartList.length===0 && cartList.cartListFreeze.length===0 ?
      <section className="non-product-cart">
      <div className="non-product-cart-content">
        <img src="assets/images/icons/shopping-cart.svg" />
        <p>장바구니가 비었습니다</p>
      </div>
    </section>:
     <div className="check-row">
     <div className="check-left">
       <div
         className={listAllCheck ? "sbCheckBoxOn" : "sbCheckBox"}
         onClick={() => handleAllCheck(listAllCheck)}
       />
       <label htmlFor="total-product-check">전체 선택</label>
     </div>
     <div className="check-right">
       <button>선택삭제</button>
       <button onClick={handleAllDelete}>전체삭제</button>
     </div>
   </div> 
      }
     
    </section>
    }
    </>
  );
}
