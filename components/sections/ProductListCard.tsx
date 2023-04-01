import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { filterProductList } from '@/types/type';
export default function ProductFilterListCard(props: {
    data: filterProductList ;
  }) {
    return (
      <div className="best-product">
        <div className="best-product__img">
          <Link href={`/product/${props.data.id}`}>
            <Image src={props.data.imgUrl} alt={props.data.name} height={200} width={200}/>
          </Link>
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
            <Link href={`/product/${props.data.id}`}>{props.data.name}</Link>
          </p>
          <p className="best-product-price">
            <strong>{props.data.price.toLocaleString()}</strong>원
          </p>
        </div>
      </div>
    );
  }
