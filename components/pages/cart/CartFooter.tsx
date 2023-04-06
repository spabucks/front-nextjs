import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import axios from "axios";
import { cartListState } from "@/state/cartListState";
import { generaldelivery } from "@/state/generaldelivery";
import { freezedelivery } from "@/state/freezedelivery";
import { cartBuyProduct } from "@/types/cartBuyProduct";
export default function CartFooter() {
  const router = useRouter();
  const [cartItems, setCartItems] = useRecoilState(cartListState);

  //최종주문 List
  const [totalBuyItems, setTotalBuyItmes] = useRecoilState(cartBuyProduct);
  useEffect(() => {
    const buyItem = cartItems.cartTotal.filter((item) => item.check === true);
    setTotalBuyItmes(buyItem);
  }, [cartItems]);

  const handleDirectClick = () => {
    const BaseUrl = process.env.baseApiUrl;
    const buyitemId = totalBuyItems.map((item) => item.cartId);
    console.log("buyitemId", buyitemId);
    axios
      .post(
        `${BaseUrl}/api/v1/purchaseTmp/add`,
        {
          cartId: buyitemId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then((res) => router.push("/payment"))
      .catch((err) => {
        console.log("err");
      });
  };

  /**체크한 상품에 대하여 가격 계산 */
  const Generalitem = cartItems.cartList.filter(
    (item: any) => item.check === true
  );
  const GeneralitemCharge = Generalitem.map((i) => i.price * i.count).reduce(
    (sum, charge) => (sum += charge),
    0
  );
  const Freezeitem = cartItems.cartListFreeze.filter(
    (item: any) => item.check === true
  );
  const FreezeitemCharge = Freezeitem.map((i) => i.price * i.count).reduce(
    (sum, charge) => (sum += charge),
    0
  );

  const [generaldeliveryCharge, setGeneralDeliveryCharge] =
    useRecoilState<number>(generaldelivery);
  const [freezedeliveryCharge, setFreezeDeliveryCharge] =
    useRecoilState<number>(freezedelivery);
  return (
    <>
      <section className="section-cart-bottom">
        <h4>총 주문 금액</h4>
        <div className="section-cart__product">
          <div>
            <span>상품금액</span>
            <p>{`${(
              GeneralitemCharge + FreezeitemCharge
            ).toLocaleString()}원`}</p>
          </div>
          <div>
            <span>할인금액</span>
            <p>0원</p>
          </div>

          <div>
            <span>배송비</span>
            <p>
              {`${(
                generaldeliveryCharge + freezedeliveryCharge
              ).toLocaleString()}`}
              원
            </p>
          </div>
        </div>
        <div className="section-cart__total-charge  border-top">
          <div>
            <span>최종 결제 금액</span>
            <p>
              {`${(
                GeneralitemCharge +
                FreezeitemCharge +
                generaldeliveryCharge +
                freezedeliveryCharge
              ).toLocaleString()}`}
              원
            </p>
          </div>
        </div>
        <div className="section-cart__total-charge__info">
          <p>
            장바구니에는 최대 20개까지 담을 수 있으며, 담긴 상품은 최대 2개월간
            보관됩니다.
            <br />
            가격,옵션 등 정보가 변경된 경우 주문이 불가할 수 있습니다.
          </p>
        </div>
      </section>
      <footer className="footer-product-cart border-top">
        <div className="footer-product-cart__info">
          <div>총 {`${Generalitem.length + Freezeitem.length}`}건/20건</div>
          <p>
            <span>
              {`${(
                GeneralitemCharge +
                FreezeitemCharge +
                generaldeliveryCharge +
                freezedeliveryCharge
              ).toLocaleString()}`}
              원
            </span>
          </p>
        </div>
        <div className="footer-charge-total-btn">
          <button type="button" onClick={handleDirectClick}>
            구매하기
          </button>
        </div>
      </footer>
    </>
  );
}
