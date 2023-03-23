import FilterHeader from "@/components/pages/filter/FilterHeader";
import { productType } from "@/types/filterTypes";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { eventProductList } from "@/types/type";
import ProfuctFilterList from "@/components/sections/ProductFilterList";
import { filterProductList } from "@/types/type";
import FirstHeader from "@/components/sections/FirstHeader";
import Header from "@/components/sections/Header";

export default function filter(props: {
  id: number;
  imgUrl: string;
  itemData: eventProductList[];
}) {
  const { query, asPath } = useRouter();
  const [productList, setProductList] = useState<filterProductList[]>([]);
  const BaseUrl = process.env.baseApiUrl;

  useEffect(() => {
    axios
      .get(`${BaseUrl}/api/v1/product/search2?${asPath.split("?")[1]}`)
      .then((res) => {
        setProductList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [asPath]);
  return (
    <>
      <Header/>
      <FilterHeader/>
      <ProfuctFilterList itemData={productList} />
    </>
  );
}
