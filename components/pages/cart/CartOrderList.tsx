import React from "react";
import { useRecoilState } from "recoil";
import { cartListState } from "@/state/cartListState";
import { useEffect, useState } from "react";
import { generaldelivery } from "@/state/generaldelivery";
import { freezedelivery } from "@/state/freezedelivery";
import { cartBuyProduct } from "@/types/cartBuyProduct";

export function GeneralCartOrderList() {
  const [cartItems, setCartItems] = useRecoilState(cartListState);

  
// console.log('buyItems',buyItems)
  /**체크한 상품에 대하여 가격 계산 */
  const Generalitem = cartItems.cartList.filter(
    (item: any) => item.check === true
  );

  const GeneralitemCharge = Generalitem.map((i) => i.price * i.count).reduce(
    (sum, charge) => (sum += charge),
    0
  );

  const [generaldeliveryCharge, setGeneralDeliveryCharge] =
    useRecoilState<number>(generaldelivery);
  useEffect(() => {
    if (Generalitem.length !== 0 && GeneralitemCharge < 30000) {
      setGeneralDeliveryCharge(3000);
      return;
    }
    setGeneralDeliveryCharge(0);
  }, [Generalitem]);

  // 체크한 항목 리코일로 관리하기

  return (
    <>
      {Generalitem.length > 0 && (
        <section className="section-cart-middle border-top">
          <div>
            <p>{`상품 ${
              Generalitem.length
            }건 ${GeneralitemCharge.toLocaleString()}원 + 배송비${generaldeliveryCharge.toLocaleString()}원 = 총 ${
              (generaldeliveryCharge + GeneralitemCharge).toLocaleString()
            }원`}</p>
            {GeneralitemCharge < 30000 ? (
              <p>{`${(
                30000 - GeneralitemCharge
              ).toLocaleString()}원 더 담으면 무료배송`}</p>
            ) : (
              <p>무료배송</p>
            )}
          </div>
          <button type="button">더 담으러 가기</button>
        </section>
      )}
    </>
  );
}

export default function FreezeCartOrderList() {
  const [cartItems, setCartItems] = useRecoilState(cartListState);

  /**체크한 상품에 대하여 가격 계산 */
  const Freezeitem = cartItems.cartListFreeze.filter(
    (item: any) => item.check === true
  );
  const FreezeitemCharge = Freezeitem.map((i) => i.price * i.count).reduce(
    (sum, charge) => (sum += charge),
    0
  );

  const [freezedeliveryCharge, setFreezeDeliveryCharge] =
    useRecoilState<number>(freezedelivery);
  useEffect(() => {
    if (Freezeitem.length !== 0 && FreezeitemCharge < 30000) {
      setFreezeDeliveryCharge(3000);
      return;
    }
    setFreezeDeliveryCharge(0);
  }, [Freezeitem]);

  return (
    <>
      {Freezeitem.length > 0 && (
        <section className="section-cart-middle border-top">
          <div>
            <p>{`상품 ${
              Freezeitem.length
            }건 ${FreezeitemCharge.toLocaleString()}원 + 배송비${freezedeliveryCharge.toLocaleString()}원 = 총 ${(
              freezedeliveryCharge + FreezeitemCharge
            ).toLocaleString()}원`}</p>
            {FreezeitemCharge < 30000 ? (
              <p>{`${(30000 - FreezeitemCharge).toLocaleString()}원 더 담으면 무료배송`}</p>
            ) : (
              <p>무료배송</p>
            )}
          </div>
          <button type="button">더 담으러 가기</button>
        </section>
      )}
    </>
  );
}
