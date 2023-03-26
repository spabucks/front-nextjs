import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

import Header from "@/components/sections/Header";
import SearchHeader from "@/components/pages/search/SearchHeader";
import ProductSearchList from "@/components/pages/search/ProductSearchList";

import { filterProductList } from "@/types/type";

export default function search2() {
  
  const BaseUrl = process.env.baseApiUrl;
  const router = useRouter();
  const [productList, setProductList] = useState<filterProductList[]>([]);
  const { query} = useRouter();

  useEffect(() => {
    const keyword = router.asPath.split("?keyword=")[1];
    axios
      .get(`${BaseUrl}/api/v1/product/search2?keyword=${keyword}&bigCategory=0`)
      .then((res) => {
        setProductList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [router]);
  return (
    <>
      <Header/>
      <div className="search-title">
        "{query.keyword}"의 검색결과
      </div>
      <SearchHeader />
      <ProductSearchList itemData={productList} />
    </>
  );
}
