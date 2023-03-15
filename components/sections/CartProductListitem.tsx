import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { cartInfo, orderListSumType } from "@/types/type";
import { useRecoilState } from "recoil";
import { orderPrice } from "@/state/orderPrice";


export default function CartProductListItem(props: {
  setIsChangeModal: React.Dispatch<React.SetStateAction<Boolean>>;
  setModalData: React.Dispatch<React.SetStateAction<any>>;
  setIsCheck: React.Dispatch<React.SetStateAction<Boolean>>;
  handleAddOrderList: Function;
  handleRemoveOrderList: Function;
  isCheck: Boolean,
  productId: number;
  count: number;
  cartId: number;
  bigCategoryId: number;
}) {

  const BaseUrl = process.env.baseApiUrl;
  const [cartProductData, setCartProductData] = useState<cartInfo>();
  const uuid: string = "85295edc-24ee-4781-b8e3-becc596b010e";


  const [total, setTotal] = useRecoilState(orderPrice);
console.log(props.bigCategoryId)
  useEffect(() => {
    axios
      .get(`${BaseUrl}/api/v1/cart/get/product/${props.productId}`)
      .then((res) => {
        setCartProductData(res.data);
        console.log('res.dataaaaaaaaaaaaaaa',res.data)
        console.log('cartProductData',cartProductData)
        if(props.bigCategoryId!==1) setTotal(total + (res.data.price * props.count))
      });
  },[]);

  const handleChangeTrueModal = () => {
    props.setModalData({
      title: cartProductData?.productName,
      price: cartProductData?.price,
      imgUrl: cartProductData?.imgUrl,
      count: props.count,
      cartId: props.cartId,
    });
    props.setIsChangeModal(true);
  }; 

const handleDelete = () => {
  console.log(props.cartId)
    axios.patch(`${BaseUrl}/api/v1/cart/delete`,{
      cartId:props.cartId
    }).then((res)=>{
      console.log(res)
      props.setIsCheck(!props.isCheck)
    })
    
  }

  const handleCheckChange = (event:ChangeEvent<HTMLInputElement>) => {
    if(event.target.checked) props.handleAddOrderList( props.cartId, props.count, cartProductData?.price )
    else props.handleRemoveOrderList( props.cartId )
  }

  return (
    <>
      {cartProductData && (
        <div className="check-row">
          <div className="check-left">
            <input type="checkbox" id={`product-check${props.cartId}`} onChange={handleCheckChange}/>
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
              <img src="assets/images/icons/close.svg" onClick={handleDelete}/>
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
                <button type="button" onClick={handleChangeTrueModal}>
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
