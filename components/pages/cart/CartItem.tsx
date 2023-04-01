import React, { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { cartListType } from "@/types/cartTypes";
import { cartType } from "@/types/cartTypes";
import { cartListState } from "@/state/cartListState";
import { cartOrderState } from "@/state/cartOrderState";
import { modal } from "@/state/modal";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { userState } from "@/state/userState";
import { cartFetchCheck } from "@/state/cartFetchCheck";

export default function CartItem(props: { data: cartListType }) {

  const [cartCheck, setCartCheck] = useRecoilState<boolean>(cartFetchCheck)
  console.log('props.data.count',props.data.count)
  const [cartOrder, setCartOrder] = useRecoilState(cartOrderState);
  const [cartList, setCartList] = useRecoilState<cartType>(cartListState);
  const BaseUrl = process.env.baseApiUrl;
  const [ischangemodal, setIsChangeModal] = useRecoilState<Boolean>(modal);
  const [isChangeCount, setIsChangeCount] = useState<number>(props.data.count);
  const [itemclose,setItemClose]=useState<boolean>(false)
  const [loginData,setLoginData]=useRecoilState(userState)
console.log('cartListcartListcartList',cartList)
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
      });
    } else {
      setCartList({
        ...cartList,
        cartList: cartList.cartList.map((item: cartListType) => {
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
      .patch(`${BaseUrl}/api/v1/cart/delete`, {
        cartId: props.data.cartId,
      }, {
        headers: {
          Authorization: `Bearer ${loginData.accessToken}`
        }
      })
      .then((res) => {
        setCartCheck(!cartCheck)
        setItemClose(!itemclose)
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
  return (
    <>{itemclose ===false ?
    
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
        <img src={`${props.data.imgUrl}`} alt="상품이미지" />
        <div className="product-view-info">
          <p>{props.data.productName}</p>
          <p>
            <span>{props.data.price.toLocaleString()}</span>원
          </p>
        </div>
        <img src="assets/images/icons/close.svg" onClick={handleDelete} />
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
          <button type="button">바로 구매</button>
        </div>
      </div>
    </div>
  </div>:""
    }
      
    </>
  );
}
