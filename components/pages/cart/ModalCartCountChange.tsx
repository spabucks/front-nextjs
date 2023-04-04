import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { modal } from "@/state/modal";
import { cartOrderState } from "@/state/cartOrderState";
import { cartListType, cartType } from "@/types/cartTypes";
import { cartListState } from "@/state/cartListState";
import axios from "axios";
import { userState } from "@/state/userState";
import Image from "next/image";
export default function ModalCartCountChange(props: {
  isChangeCount: Boolean;
  setIsChangeCount: Function;
}) {
  const [loginData, setLoginData] = useRecoilState(userState);
  const [ischangemodal, setIsChangeModal] = useRecoilState<Boolean>(modal);
  const [cartListItem, setCartListItems] =
    useRecoilState<cartType>(cartListState);
  const [item, setItem] = useState<cartListType>();
  const orderItem = useRecoilValue(cartOrderState);

  useEffect(() => {
    if (orderItem.typeId === 0)
      setItem(
        cartListItem.cartList.find((item) => item.cartId === orderItem.itemId)
      );
    else
      setItem(
        cartListItem.cartListFreeze.find(
          (item) => item.cartId === orderItem.itemId
        )
      );
  }, []);

  const handleChangeFalseModal = () => {
    setIsChangeModal(false);
  };

  const changeItemCart = () => {
    const BaseUrl = process.env.baseApiUrl;
    axios
      .patch(
        `${BaseUrl}/api/v1/cart/update`,
        {
          cartId: item?.cartId,
          amount: item?.count,
        },
        {
          headers: {
            Authorization: `Bearer ${loginData.accessToken}`,
          },
        }
      )
      .then((res) => {
        props.setIsChangeCount(!props.isChangeCount);
        setIsChangeModal(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {item && (
        <>
          <div className="modalcount-container">
            <header>
              <div className="sub-header">
                <Image
                  src="assets/images/icons/white.png"
                  alt="hideimage"
                  width={20}
                  height={20}
                />
                <h1 className="sub-header-title">주문수량</h1>
                <Image
                  src="assets/images/icons/close.svg"
                  onClick={handleChangeFalseModal}
                  width={20}
                  height={20}
                  alt={"닫기버튼"}
                />
              </div>
            </header>
            <section className="modalchangecount-main boder-under-border">
              <div className="modalchangecount-info">
                <div className="modalchangecount-img">
                  <Image
                    width={200}
                    height={200}
                    alt={"상품 이미지"}
                    src={item.imgUrl}
                  />
                </div>
                <div className="modalchangecount-title-count">
                  <p>{item.productName}</p>
                  <p>{item.price.toLocaleString()}원</p>
                </div>
              </div>
            </section>
            <div className="buy-product-change-lists">
              <div className="buy-product-change-list-main">
                <div className="buy-product-change-list">
                  <p>상품주문수량</p>
                  <div className="buy-product-change--count-charge">
                    <div className="buy-product-change-count">
                      {item.count > 1 ? (
                        <button
                          onClick={() => {
                            setItem({ ...item, count: item.count - 1 });
                          }}
                          type="button"
                        >
                          -
                        </button>
                      ) : (
                        <button>-</button>
                      )}

                      <span>{item.count}</span>
                      {item.count < 5 ? (
                        <button
                          onClick={() => {
                            setItem({ ...item, count: item.count + 1 });
                          }}
                          type="button"
                        >
                          +
                        </button>
                      ) : (
                        <button>+</button>
                      )}
                    </div>
                    <div className="buy-product-change-charge">
                      {(item.count * item.price).toLocaleString()}원
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="footer-product-cart">
              <div className="footer-product-cart__info">
                <div>주문금액</div>
                <p>
                  <span>합계 {(item.count * item.price).toLocaleString()}</span>
                  원
                </p>
              </div>
              <div className="footer-charge-total-btn">
                <button type="button">취소</button>
                <button type="button" onClick={changeItemCart}>
                  확인
                </button>
              </div>
            </footer>
          </div>
        </>
      )}
    </>
  );
}
