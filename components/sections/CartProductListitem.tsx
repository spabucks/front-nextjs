import axios from "axios";
import { useEffect, useState } from "react";
import { cartInfo } from "@/types/type";

export default function CartProductListItem(
  props:{
    setIsChangeModal: React.Dispatch<React.SetStateAction<Boolean>>
    productId: number;
    count: number;
  }

){

const BaseUrl = process.env.baseApiUrl;
  const [cartProductData, setCartProductData] = useState<cartInfo>();
  const uuid: string = "85295edc-24ee-4781-b8e3-becc596b010e";
  useEffect(() => {
    axios.get(`${BaseUrl}/api/v1/cart/get/product/${props.productId}`).then((res) => {
      setCartProductData(res.data);
    });
  });
  const handleChangeTrueMondal = () => {
    props.setIsChangeModal(true);
  };
  return (
    <>
      {cartProductData && (
        <div className="check-row">
          <div className="check-left">
            <input type="checkbox" id="product-check" />
            <label htmlFor="product-check"></label>
          </div>
          <div className="product-cart-view">
            <div className="product-view">
              <img src={cartProductData.imgUrl} alt="상품이미지" />
              <div className="product-view-info">
                <p>{cartProductData.productName}</p>
                <p>
                  <span>{cartProductData.price}</span>원
                </p>
              </div>
              <img src="assets/images/icons/close.svg"/>
            </div>
            <div className="product-view-count-info">
              <div className="product-view-count">{`수량: ${props.count}개`}</div>
              <div className="product-view-charge-info">
                <p className="product-view-charge__title">주문금액</p>
                <p className="product-view-charge">
                  <span>{props.count * cartProductData.price}</span>원
                </p>
              </div>
              <div className="product-view-change_buy__btn">
                <button type="button" onClick={handleChangeTrueMondal}>
                  주문 수정
                </button>
                <button type="button">바로 구매</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
