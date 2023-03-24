import Link from "next/link";
import { productBestList } from "@/types/type";
import { useEffect, useState } from "react";
import { getImageSize } from 'react-image-size';
import Image from "next/image";
export default function ProducBestListCard(props: {
  data: productBestList;
  count: number;
}) {
  const [size,setSize]=useState({
    width:0,
    height:0
  })

  useEffect(()=>{
    getImageSize(props.data.imgUrl).then(res=>(
      setSize({width:res.width,height:res.height})
    ))
  })
  return (
    <div className="best-product">
      <div className="best-product__img">
        <Link href={`/product/${props.data.id}`}>
          <Image src={props.data.imgUrl} alt={props.data.title} width={size.width} height={size.height}/>
        </Link>
        <div>{props.count + 1}</div>
      </div>
      <div className="best-product__info">
        <p
          className={
            props.data.isNew === true
              ? "product-item-new"
              : "product-item-new product-item-new-hidden"
          }
        >
          New
        </p>
        <p className="best-product-title">
          <Link href={`/product/${props.data.id}`}>{props.data.title}</Link>
        </p>
        <p className="best-product-price">
          <strong>{props.data.price}</strong>원
        </p>
      </div>
    </div>
  );
}
