import { productCardData } from "@/types/type";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getImageSize } from "react-image-size";

export default function ProductCard(props: { data: productCardData }) {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  /**객체로 넘어옴 */
  useEffect(() => {
    getImageSize(props.data.imgUrl).then((res) => {
      setSize({ width: res.width, height: res.height });
    });
  }, [props.data]);

  return (
    <div className="slide-square-product-itemlist">
      <div className="slide-square-product-item__img">
        <Link href={`/product/${props.data.id}`}>
          <Image
            className="slide-square-item-img"
            src={props.data.imgUrl}
            alt={props.data.title}
            width={size.width}
            height={size.height}
          />
        </Link>
      </div>
      <div className="slide-square-product-item__info">
        <div className="new-best">
          {props.data.isNew === true ? (
            <p className={"product-item-new"}>New</p>
          ) : (
            <p className={"product-item-new-hidden"}> </p>
          )}
          {props.data.isBest == true ? (
            <p className={"product-item-best"}>Best</p>
          ) : (
            <p className={"product-item-new-hidden"}> </p>
          )}
        </div>
        <p className="slide-square-product-item-title">
          <Link href={`/product/${props.data.id}`}>{props.data.title}</Link>
        </p>
        <p className="slide-square-product-item-price">
          <span>{props.data.price.toLocaleString()}</span>원
        </p>
      </div>
    </div>
  );
}
