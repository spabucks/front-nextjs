import React from "react";
import { filterProductList } from "@/types/type";
import ProductFilterListCard from "../../sections/ProductFilterListCard";
import { useState } from "react";
import Select from "react-select"; //라이브러리 import
import { OnChangeValue } from "react-select/dist/declarations/src";

export default function ProfuctFilterList(props: {
  itemData: filterProductList[];
}) {
  const [product, setProduct] = useState<filterProductList[]>(props.itemData);
  
  const orderList = [
    { value: "like", label: "좋아요순" },
    { value: "high", label: "높은가격순" },
    { value: "low", label: "낮은가격순" },
   ] //원래는 select 태그 안에 들어가는 애들을 배열로 만들어준다.
   
   const [selectOrderList, setSelectOrderList] = useState(orderList[0]);
   //안에 들어가는 값을 받아야해서 state사용
  return (
    <>
      <div className="order-product-btn">
      <Select className="order-select"
      options={orderList} //위에서 만든 배열을 select로 넣기
      // onChange={setSelectOrderList} //값이 바뀌면 setState되게
      defaultValue={orderList[0]} /> 

      </div>

      <section className="filter-product-lists">
        <div className="best-product-list">
          {props.itemData &&
            props.itemData.map((items, i) => (
              <ProductFilterListCard key={items.id} data={items} />
            ))}
        </div>
        {props.itemData.length === 0 && (
          <div className="filter-nonproduct">조회되는 상품이 없습니다.</div>
        )}
      </section>
    </>
  );
}
