import { useState } from "react";
import axios from "axios";

export interface ChildProps {
  setIsChangeModal: React.Dispatch<React.SetStateAction<Boolean>>;
  setIsCheck: React.Dispatch<React.SetStateAction<Boolean>>;

}
export interface ModalDatas {
  title: string;
  price: number;
  imgUrl: string;
  count: number;
  cartId: number;
}

export default function ModalChangeCount({
  setIsChangeModal,
  setIsCheck,
}: ChildProps) {
  const BaseUrl = process.env.baseApiUrl;
  // const changeItemCart = () => {
  //   axios
  //     .patch(`${BaseUrl}/api/v1/cart/update`, {
  //       cartId: modalData.cartId,
  //       amount: itmeChangecount,
        
  //     })
  //     .then((res) => {
  //       setIsChangeModal(false);
  //       setIsCheck(!isCheck);
  //     })
  //     .catch((err) => console.log(err));
  // };

  const handleChangeTrueModal = () => {
   setIsChangeModal(true);
  };



  return (
    <>
      <header>
        <div className="sub-header">
          <img src="assets/images/icons/white.png" />
          <h1 className="sub-header-title">주문 수정</h1>
          <img src="assets/images/icons/close.svg" />
        </div>
      </header>
      <section className="modalchangecount-main boder-under-border">
        <div className="modalchangecount-info">
          <div className="modalchangecount-img">
            <img />
          </div>
          <div className="modalchangecount-title-count">
            <p>dddddddddddd</p>
            <p>dddddddddddddd</p>
          </div>
        </div>
      </section>
      <div className="buy-product-change-lists">
        <div className="buy-product-change-list-main">
          <div className="buy-product-change-list">
            <p>상품주문수량</p>
            <div className="buy-product-change--count-charge">
              <div className="buy-product-change-count">
                <button>-</button>
                <span>jjjjjjjjjjjjjjjj</span>
                <button>+</button>
              </div>
              <div className="buy-product-change-charge">jjjjjjjjjjj원</div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer-product-cart">
        <div className="footer-product-cart__info">
          <div>주문금액</div>

          <p>
            <span>합계 kllllllllllll원</span>
          </p>
        </div>
        <div className="footer-charge-total-btn">
          <button type="button">취소</button>
          <button type="button">확인</button>
        </div>
      </footer>
    </>
  );
}
