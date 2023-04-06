import Link from "next/link";
import Image from "next/image";

import { useEffect, useState } from "react";
import { getImageSize } from "react-image-size";
import { productBestList } from "@/types/type";

export default function ProducBestListCard(props: {
  data: productBestList;
  count: number;
}) {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    getImageSize(props.data.imgUrl).then((res) =>
      setSize({ width: res.width, height: res.height })
    );
  });

  return (
    <div className="best-product">
      <div className="best-product__img">
        <Link href={`/product/${props.data.id}`}>
          <Image
            src={props.data.imgUrl}
            alt={props.data.title}
            width={size.width}
            height={size.height}
          />
        </Link>
        <div>{props.count + 1}</div>
      </div>

      <div className="best-product__info">
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
        <p className="best-product-title">
          <Link href={`/product/${props.data.id}`}>{props.data.title}</Link>
        </p>
        <p className="best-product-price">
          <strong>{props.data.price.toLocaleString()}</strong>원
        </p>
      </div>
    </div>
  );
}
