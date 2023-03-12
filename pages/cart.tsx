import CartProductCard from "@/components/ui/CartProductCard";
import CartProductCheck from "@/components/ui/CartProductCheck";
import CartProductTitle from "@/components/ui/CartProductTitle";
import { cartproduct } from "@/types/type";
import { useState, useEffect } from "react";
import axios from "axios";
import Product from "./product/[productId]";
export default function Cart() {
  // const [freezedata, setFreezeData] = useState<cartproduct[]>([]);
  // const [generaldata, setGeneralData] = useState<cartproduct[]>([]);
  const [data, setData] = useState<cartproduct[]>([]);
  const BaseUrl = process.env.baseApiUrl;
  const uuid: string = "85295edc-24ee-4781-b8e3-becc596b010e";
  useEffect(() => {
    axios
      .get(`http://localhost:3001/cartproduct`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log("data", data);
  /** 냉동상품 filter */
  const freezefilter: cartproduct[] = data.filter(
    (item: cartproduct) => item.bigCategory === "케이크"
  );
  console.log("freezefilter", freezefilter);
 /**일반상품 filter */
  const generalfilter: cartproduct[] = data.filter(
    (item: cartproduct) => item.bigCategory != "케이크"
  );
  console.log("generalfilter", generalfilter);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/cartproduct-freeze")
  //     .then((res) => {
  //       setFreezeData(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/cartproduct-general")
  //     .then((res) => {
  //       setGeneralData(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  // console.log("freezedatadataaaaaaaaaaaaaaaa", freezedata);
  // console.log("generaldataaaaaaaaaaaaaaaa", generaldata);
  return (
    <>
      <header>
        <div className="sub-header">
          <img src="assets/images/icons/left-chevron.svg" />
          <h1 className="sub-header-title">온라인 스토어</h1>
          <img src="assets/images/icons/close.svg" />
        </div>
      </header>
      <h2 className="cart-title">장바구니</h2>
      {data.length === 0 && (
        <section className="non-product-cart">
          <div className="non-product-cart-content">
            <img src="assets/images/icons/shopping-cart.svg" />
            <p>장바구니가 비었습니다</p>
          </div>
        </section>
      )}
      {data.length != 0 && (
        <>
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
          </section>
          {generalfilter.length > 0 && <CartProductTitle title={"일반 상품"} />}
          {generalfilter &&
            generalfilter.map((item) => (
              <div className="check-row" key={item.productId}>
                <div className="check-left">
                  <input type="checkbox" id="product-check" />
                </div>
                <div className="product-cart-view">
                  <div className="product-view">
                    <img src={item.imgUrl} alt="상품이미지" />
                    <div className="product-view-info">
                      <p>{item.productName}</p>
                      <p>
                        <span>{item.price}</span>원
                      </p>
                    </div>
                    <img src="assets/images/icons/close.svg" />
                  </div>
                  <div className="product-view-count-info">
                    <div className="product-view-count">{`수량: ${item.count}개`}</div>
                    <div className="product-view-charge-info">
                      <p className="product-view-charge__title">주문금액</p>
                      <p className="product-view-charge">
                        <span>{item.count * item.price}</span>원
                      </p>
                    </div>
                    <div className="product-view-change_buy__btn">
                      <button type="button">주문 수정</button>
                      <button type="button">바로 구매</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/**일반 상품을 합쳐서 계산해야하는데...?!!  */}
          {generalfilter && (
            <div className="section-cart-middle border-top">
              <div>
                <p>상품 1건 23000원 배송비 3,000원 = 총 26,000원</p>
                <p>7,000원 더 담으면 무료배송</p>
              </div>
              <button type="button">더 담으러 가기</button>
            </div>
          )}
          
          
          {freezefilter.length>0 && <CartProductTitle title={"냉동 상품"} />}
          {freezefilter &&
            freezefilter.map((item) => (
              <div className="check-row" key={item.productId}>
                <div className="check-left">
                  <input type="checkbox" id="product-check" />
                </div>
                <div className="product-cart-view">
                  <div className="product-view">
                    <img
                      src="assets/images/banner/스타벅스_우산.jpg"
                      alt="상품이미지"
                    />
                    <div className="product-view-info">
                      <p>{item.productName}</p>
                      <p>
                        <span>{item.price}</span>원
                      </p>
                    </div>
                    <img src="assets/images/icons/close.svg" />
                  </div>
                  <div className="product-view-count-info">
                    <div className="product-view-count">수량: 1개</div>
                    <div className="product-view-charge-info">
                      <p className="product-view-charge__title">주문금액</p>
                      <p className="product-view-charge">
                        <span>{item.price}</span>원
                      </p>
                    </div>
                    <div className="product-view-change_buy__btn">
                      <button type="button">주문 수정</button>
                      <button type="button">바로 구매</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}


       {/**냉동 상품을 합쳐서 계산해야하는데...?!!  */}
          <div className="section-cart-middle border-top">
            <div>
              <p>상품 1건 23,000원 배송비 3,000원 = 총 26,000원</p>
              <p>7,000원 더 담으면 무료배송</p>
            </div>
            <button type="button">더 담으러 가기</button>
          </div>



       {/**일반 상품과 냉동상품을 합쳐서 계산해야하는데...?!!  */}
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
            <div className="section-cart__total-charge  border-top">
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
          
          <footer className="footer-product-cart border-top">
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
        </>
      )}
    </>
  );
}
