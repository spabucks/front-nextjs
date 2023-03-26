import { detailProduct } from "@/types/type";
import Image from "next/image";
import { useEffect, useState } from "react";
import {getImageSize} from "react-image-size"

export default function DetailProduct(props: { data: detailProduct }) {
  const [size,setSize]=useState({
    width:0,
    height:0
  })
  useEffect(()=>{
    getImageSize(props.data.imgUrl).then((res)=>{
      setSize({width:res.width, height:res.height})
    })
  })


  return (
    <>
      <section className="section-main">
        <div className="product-main-info">
          <Image src={props.data.imgUrl} alt="main-img" width={size.width} height={size.height}></Image>
          <div className="product-detail-main__info">
            <div className="product-detail-main__title">
              <h2>{props.data.title}</h2>
              <Image src={"../assets/images/icons/share.svg"} alt={"share-btn"} width={10} height={10}/>
            </div>
            <p>{props.data.description}</p>
            <p className="product-charge">
              <span>{props.data.price}</span>원
            </p>
          </div>
        </div>
        <div className="sep"></div>
        <div className="product-detail-info">
          <h3>상품정보</h3>
          {props.data.productDetailImgUrl.map((item:string) => {
            return (
              <Image src={item} alt="상품상세정보" width={300} height={300}></Image>
            )
          })}
        </div>
      </section>
    </>
  );
}
