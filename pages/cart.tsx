import CartProductTitle from "@/components/ui/CartProductTitle";
import { useState, useEffect } from "react";
import axios from "axios";
import { cartData, cartuseritem } from "@/types/type";
import CartProductListItem from "@/components/sections/CartProductListitem";
import { ShowModal } from "@/components/ui/CartProductCardDetail";
import Link from "next/link";
export interface ChildProps {
  setIsChangeModal: React.Dispatch<React.SetStateAction<Boolean>>;
  modalData: ModalDatas;
}
export interface ModalDatas {
  title: string;
  price: number;
  imgUrl: string;
  count: number;
  cartId: number;
}
function ModalChangeCount({ setIsChangeModal, modalData }: ChildProps) {
  const BaseUrl = process.env.baseApiUrl;
  const [itmeChangecount, setItemChangecount] = useState<number>(
    modalData.count
  );
  const changeItemCart = () => {
    axios.put(`${BaseUrl}/api/v1/cart/updata/${modalData.cartId}`, {
      amount: {itmeChangecount}
    }).then((res)=>{
      console.log('res',res)
    }).catch((err)=>console.log(err));
  };
  console.log('modalData.cartId',modalData.cartId)
  console.log('itmeChangecount',itmeChangecount)
  return (
    <>
      <header>
        <div className="sub-header">
          <img src="assets/images/icons/white.png" />
          <h1 className="sub-header-title">주문 수정</h1>
          <img
            src="assets/images/icons/close.svg"
            onClick={() => {
              setIsChangeModal(false);
            }}
          />
        </div>
      </header>
      <section className="modalchangecount-main boder-under-border">
        <div className="modalchangecount-info">
          <div className="modalchangecount-img">
            <img src={modalData.imgUrl} />
          </div>
          <div className="modalchangecount-title-count">
            <p>{modalData.title}</p>
            <p>{modalData.price}</p>
          </div>
        </div>
      </section>
      <div className="buy-product-change-lists">
        <div className="buy-product-change-list-main">
          <div className="buy-product-change-list">
            <p>상품주문수량</p>
            <div className="buy-product-change--count-charge">
              <div className="buy-product-change-count">
                {itmeChangecount > 1 ? (
                  <button
                    onClick={() => {
                      setItemChangecount(itmeChangecount - 1);
                    }}
                  >
                    -
                  </button>
                ) : (
                  <button>-</button>
                )}
                <span>{itmeChangecount}</span>
                {itmeChangecount < 5 ? (
                  <button
                    onClick={() => {
                      setItemChangecount(itmeChangecount + 1);
                    }}
                  >
                    +
                  </button>
                ) : (
                  <button>+</button>
                )}
              </div>
              <div className="buy-product-change-charge">
                {itmeChangecount * modalData.price}원
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer-product-cart">
        {itmeChangecount === 5 && <ShowModal />}
        <div className="footer-product-cart__info">
          <div>주문금액</div>

          <p>
            <span>합계 {itmeChangecount * modalData.price}원</span>
          </p>
        </div>
        <div className="footer-charge-total-btn">
          <button type="button">취소</button>
          <button
            type="button"
            onClick={() => {
              changeItemCart;
          
            }}
          >
            확인
          </button>
        </div>
      </footer>
    </>
  );
}

export default function Cart() {
  const [data, setData] = useState<cartData>();
  const [modalData, setModalData] = useState<ModalDatas>();
  let [ischangemodal, setIsChangeModal] = useState<Boolean>(false);
  const BaseUrl = process.env.baseApiUrl;
  const uuid: string = "85295edc-24ee-4781-b8e3-becc596b010e";
  useEffect(() => {
    axios
      .get(`${BaseUrl}/api/v1/cart/get/${uuid}`)
      .then((res) => {
        const itemNumber = res.data.length;
        const generalitems = res.data.filter(
          (item: any) => item.bigCategoryId !== 1
        );
        const freezeitems = res.data.filter(
          (item: any) => item.bigCategoryId === 1
        );
        setData({ ...data, itemNumber, generalitems, freezeitems });
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {modalData && ischangemodal === true ? (
        <ModalChangeCount
          setIsChangeModal={setIsChangeModal}
          modalData={modalData}
        />
      ) : (
        <>
          <header>
            <div className="sub-header">
              <img src="assets/images/icons/left-chevron.svg" />
              <h1 className="sub-header-title">온라인 스토어</h1>
              <img src="assets/images/icons/close.svg" />
            </div>
          </header>
          <h2 className="cart-title">장바구니</h2>
          {data && data.itemNumber === 0 && (
            <section className="non-product-cart">
              <div className="non-product-cart-content">
                <img src="assets/images/icons/shopping-cart.svg" />
                <p>장바구니가 비었습니다</p>
              </div>
            </section>
          )}
          {data && data.itemNumber !== 0 && (
            <section className="section-cart-top">
              <div className="check-title-main">
                <div className="check-btn">
                  <input type="checkbox" id="total-product-check" />
                  <p>전체 선택</p>
                </div>
                <div className="check-right">
                  <button>
                    <span>선택삭제</span>
                  </button>
                  <button>전체삭제</button>
                </div>
              </div>
              {data.generalitems.length > 0 && (
                <CartProductTitle title={"일반 상품"} />
              )}
              {data.generalitems.length > 0 &&
                data.generalitems.map((item) => (
                  <CartProductListItem
                    key={item.cartId}
                    productId={item.productId}
                    count={item.count}
                    cartId={item.cartId}
                    setIsChangeModal={setIsChangeModal}
                    setModalData={setModalData}
                  />
                ))}
              {data.generalitems.length > 0 && (
                <div className="section-cart-middle border-top">
                  <div>
                    <p>상품 1건 23000원 배송비 3,000원 = 총 26,000원</p>
                    <p>7,000원 더 담으면 무료배송</p>
                  </div>
                  <button type="button">더 담으러 가기</button>
                </div>
              )}
              {data.freezeitems.length > 0 && (
                <CartProductTitle title={"냉동 상품"} />
              )}
              {data.freezeitems.length > 0 &&
                data.freezeitems.map((item) => (
                  <CartProductListItem
                    key={item.cartId}
                    productId={item.productId}
                    count={item.count}
                    cartId={item.cartId}
                    setIsChangeModal={setIsChangeModal}
                    setModalData={setModalData}
                  />
                ))}
              {data.freezeitems.length > 0 && (
                <div className="section-cart-middle border-top">
                  <div>
                    <p>상품 1건 23,000원 배송비 3,000원 = 총 26,000원</p>
                    <p>7,000원 더 담으면 무료배송</p>
                  </div>
                  <button type="button">더 담으러 가기</button>
                </div>
              )}
              <section className="section-cart-bottom">
                <h4>총 주문 금액</h4>
                <div className="section-cart__product">
                  <div>
                    <span>상품금액</span>
                    <p>0원</p>
                  </div>
                  <div>
                    <span>할인금액</span>
                    <p>0원</p>
                  </div>
                  <div>
                    <span>배송비</span>
                    <p>0원</p>
                  </div>
                </div>

                <div className="section-cart__total-charge">
                  <div>
                    <span>최종 결제 금액</span>
                    <p>0원</p>
                  </div>
                </div>
                <div className="section-cart__total-charge__info">
                  <p>
                    장바구니에는 최대 20개까지 담을 수 있으며, 담긴 상품은 최대
                    2개월간 보관됩니다.
                    <br />
                    가격,옵션 등 정보가 변경된 경우 주문이 불가할 수 있습니다.
                  </p>
                </div>
              </section>
              <footer className="footer-product-cart">
                <div className="footer-product-cart__info">
                  <div>총 1건/20건</div>
                  <p>
                    <span>26,000</span>원
                  </p>
                </div>
                <div className="footer-charge-total-btn">
                  <button type="button">선물하기</button>
                  <button type="button">구매하기</button>
                </div>
              </footer>
            </section>
          )}
        </>
      )}
    </>
  );
}
