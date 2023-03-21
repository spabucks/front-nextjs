import React from 'react'
import { filterProductList } from '@/types/type';
import Link from 'next/link';
export default function ProductFilterListCard(props: {
    data: filterProductList ;
  }) {
    return (
      <div className="best-product">
        <div className="best-product__img">
          <Link href={`/product/${props.data.id}`}>
            <img src={props.data.imgUrl} alt={props.data.name} />
          </Link>
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
            <Link href={`/product/${props.data.id}`}>{props.data.name}</Link>
          </p>
          <p className="best-product-price">
            <strong>{props.data.price}</strong>원
          </p>
        </div>
      </div>
    );
  }
