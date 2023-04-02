import { useRouter } from "next/router";
import SecondHeader from "@/components/layouts/SecondHeader";
import SlideSquareProduct from "@/components/layouts/SlideSquareProduct";
import DetailProduct from "@/components/ui/DetailProduct";
import { detailProduct, recommandproduct } from "@/types/type";
import { useState, useEffect } from "react";
import axios from "axios";
import FooterBtn from "@/components/ui/FooterBtn";
import CartProductCardDetail from "@/components/ui/CartProductCardDetail";
import CartPlusModal from "@/components/sections/CartPlusModal";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartCount } from "@/state/cartCount";
import Image from "next/image";
import TopScrollBtn from "@/components/ui/TopScrollBtn";
import { userState } from "@/state/userState";
import Rightarrow from "@/components/ui/Rightarrow";
import FirstHeader from "@/components/sections/FirstHeader";

export default function Product() {
  const { query } = useRouter();
  const [data, setData] = useState<recommandproduct[]>([]);
  const [productData, setProductData] = useState<detailProduct>();
  /**isClick===true이면 선물하기, 구매하기,장바구니가 보이는게  */
  const [isClick, setIsClick] = useState<Boolean>(false);
  /**장바구니에 추가되었습니다라는 모달 */
  const [isCartModal, setIsCartModal] = useState<Boolean>(false);
  const [status, setStatus] = useState<number>(0);
  const [addcount, setAddCount] = useState<number>(0);
  const [changecount, setChangecount] = useState(1);
  useEffect(() => {
    const BaseUrl = process.env.baseApiUrl;
    axios
      .get(`${BaseUrl}/api/v1/product/get/${query.productId}`)
      .then((res) => {
        setProductData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [query.productId]);

  useEffect(() => {
    const BaseUrl = process.env.baseApiUrl;
    axios
      .get(`${BaseUrl}/api/v1/product-category/get-others/${query.productId}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [query.productId]);

  // const [count, setCount] = useRecoilState(cartCount);
  // const [ count,setCount]=useRecoilState(cartCount);
  useEffect(() => {
    setChangecount(changecount);
  }, [changecount]);

  const [loginData, setLoginData] = useRecoilState(userState);
  const handleAddCart = () => {
    const BaseUrl = process.env.baseApiUrl;
    axios
      .post(
        `${BaseUrl}/api/v1/cart/add`,
        {
          productId: query.productId,
          amount: changecount,
        },
        {
          headers: {
            Authorization: `Bearer ${loginData.accessToken}`,
          },
        }
      )
      .then((res) => {
        setIsCartModal(true); //"장바구니에 추가되었습니다라는 것이 표시되게 true로 바뀜"
        setIsClick(false); //장바구니, 선물하기, 구매하기가 사라지게
      })
      .catch((err) => {
        console.log("err", err);
        if (err.response.status === 400) {
          const errorresponse = err.response.data;
          setStatus(400);
          setAddCount(errorresponse);
        }
      });
  };

  return (
    <>
      <SecondHeader title={"온라인스토어"} />
      <TopScrollBtn></TopScrollBtn>
      <div className="sep"></div>
      <CartPlusModal isView={isCartModal} setIsCartModal={setIsCartModal} />
      {productData && <DetailProduct data={productData} />}
      {data &&
        data.map((item) => (
          <SlideSquareProduct
            key={item.id}
            title={item.name}
            itemData={item.data}
            description={item.description}
          />
        ))}
      <div className="sep"></div>

      <footer className="footer-product-detail">
        <div className="footer-product-checkinfo">
          <div className="boder-under">
            <p>이용조건 및 배송 안내</p>

            <Rightarrow />
          </div>
          <div className="boder-under">
            <p>상품제공정보고시</p>
            <Rightarrow />
          </div>
          <div className="boder-under">
            <p>교환/반품 안내</p>

            <Rightarrow />
          </div>
          <div className="boder-under">
            <p>취소/환불 안내</p>
            <Rightarrow />
          </div>
        </div>
      </footer>
      <CartProductCardDetail
        isClick={isClick}
        setIsClick={setIsClick}
        data={productData}
        status={status}
        addcount={addcount}
        changecount={changecount}
        setChangecount={setChangecount}
      />

      {isClick ? (
        <div className="footer-charge-total-btn">
          <div onClick={handleAddCart}>
            <Image
              src="../assets/images/icons/shopping-cart.svg"
              alt="cart"
              height={20}
              width={20}
            ></Image>
          </div>
          <button type="button">선물하기</button>
          <button type="button">구매하기</button>
        </div>
      ) : (
        <FooterBtn
          title={"구매하기"}
          isClick={isClick}
          setIsClick={setIsClick}
        />
      )}
    </>
  );
}
