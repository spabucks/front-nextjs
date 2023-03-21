import React from 'react'
import {filterProductList } from '@/types/type';
import ProductFilterListCard from './ProductFilterListCard';


export default function ProfuctFilterList(props:{
    itemData: filterProductList[];
}) {
  return (
    <section className="filter-product-lists">
    <div className="best-product-list">
      {props.itemData &&
        props.itemData.map((items, i) => (
          <ProductFilterListCard key={items.id} data={items} />
        ))}
    </div>
  </section>
  )
}
