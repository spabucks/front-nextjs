import React from "react";

import { filterProductList } from "@/types/type";
import ProductListCard from "../../sections/ProductListCard";
import { useState } from "react";
export default function ProductSearchList(props: {
  productData: filterProductList[];
}) {
  const [product, setProduct] = useState<filterProductList[]>(
    props.productData
  );
  return (
    <>
      <div className="order-product-btn">
        {/* <button
          className="order-high-product"
          onClick={() => {
            let highcopy = [...props.itemData];
            highcopy.sort((a, b) => b.price - a.price);
            console.log("highcopy", highcopy);
            setProduct(highcopy);
          }}
        >
          높은가격순
        </button>
        <button
          className="order-low-product"
          onClick={() => {
            let lowcopy = [...props.itemData];
            lowcopy.sort((a, b) => a.price - b.price);
            console.log("lowcopy", lowcopy);
            setProduct(lowcopy);
          }}
        >
          낮은가격순
        </button> */}
      </div>
      <section className="filter-product-lists">
        <div className="best-product-list">
          {props.productData &&
            props.productData.map((items, i) => (
              <ProductListCard key={items.id} data={items} />
            ))}
        </div>
        {props.productData.length === 0 && (
          <div className="filter-nonproduct">조회되는 상품이 없습니다.</div>
        )}
      </section>
    </>
  );
}
