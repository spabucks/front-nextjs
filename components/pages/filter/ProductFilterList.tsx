import React from "react";
import { filterProductList } from "@/types/type";
import ProductListCard from "../../sections/ProductListCard";
import { useState } from "react";
import Select from "react-select"; //라이브러리 import
import { OnChangeValue } from "react-select/dist/declarations/src";

export default function ProfuctFilterList(props: {
  itemData: filterProductList[];
}) {
  const [product, setProduct] = useState<filterProductList[]>(props.itemData);

  return (
    <>
      <section className="filter-product-lists">
        <div className="best-product-list">
          {props.itemData &&
            props.itemData.map((items, i) => (
              <ProductListCard key={items.id} data={items} />
            ))}
        </div>
        {props.itemData.length === 0 && (
          <div className="filter-nonproduct">조회되는 상품이 없습니다.</div>
        )}
      </section>
    </>
  );
}
