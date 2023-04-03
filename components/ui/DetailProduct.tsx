import Image from "next/image";
import { useEffect, useState } from "react";
import { getImageSize } from "react-image-size";

import { detailProduct } from "@/types/type";

export default function DetailProduct(props: { data: detailProduct }) {

  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    getImageSize(props.data.imgUrl).then((res) => {
      setSize({ width: res.width, height: res.height });
    });
  }, []);
  
  // /**스크롤에 따라 이미지 변경 */
  const [position, setPosition] = useState(0);
  const [titleshow, setTitleShow] = useState(false);

  const handleShow = () => {
    setPosition(window.pageYOffset);
    if (position > 600) {
      setTitleShow(true);
    } else {
      setTitleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleShow);
    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  },[]);


  return (
    <>
      {titleshow === true && (
        <div className="show-title border-bottom-shadow">
          <Image
            src={props.data.imgUrl}
            alt="main-img"
            width={50}
            height={50}
          ></Image>
          <div className="show-maintitle">{props.data.title}</div>
        </div>
      )}
      <section className="section-main">
        <div className="product-main-info">
          <Image
            src={props.data.imgUrl}
            alt="main-img"
            width={size.width}
            height={size.height}
          ></Image>
          <div className="product-detail-main__info">
            <div className="product-detail-main__title">
              <h1>{props.data.title}</h1>
              <Image
                src={"../assets/images/icons/share.svg"}
                alt={"share-btn"}
                width={10}
                height={10}
              />
            </div>
            <p>{props.data.description}</p>
            <p className="product-charge">
              <span>{props.data.price.toLocaleString()}</span>원
            </p>
          </div>
        </div>
        <div className="sep"></div>
        <div className="product-detail-info">
          <h3>상품정보</h3>
          {props.data.productDetailImgUrl.map((item: string) => {
            return (
              <Image
              key={item}
                src={item}
                alt="상품상세정보"
                width={300}
                height={300}
              ></Image>
            );
          })}
        </div>
      </section>
    </>
  );
}
