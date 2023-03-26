import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { searchDataType } from "@/types/searchTypes";
import SearchHeader from "@/components/pages/search/SearchHeader";
import ProfuctFilterList from "@/components/sections/ProductFilterList";
import EventProductList from "@/components/layouts/EventProductList";
import ProductSearchList from "@/components/sections/ProductSearchList";
import { filterProductList } from "@/types/type";
import Header from "@/components/sections/Header";
export default function search2() {
  const BaseUrl = process.env.baseApiUrl;
  const router = useRouter();
  const bigcategoryId: string | string[] | undefined = router.query.bigCategory;
  console.log(router);
  const [productList, setProductList] = useState<filterProductList[]>([]);
  const keywordValue = router.asPath.split("?keyword=")[1];
  const { query, asPath } = useRouter();
  console.log('asPath',asPath)
  useEffect(() => {
    const keyword = router.asPath.split("?keyword=")[1];
    axios
      .get(`${BaseUrl}/api/v1/product/search2?keyword=${keyword}&bigCategory=0`)
      .then((res) => {
        console.log(res.data);
        setProductList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [router]);
console.log('query',query)
  return (
    <>
      <Header />
      <div className="search-title">
        "{query.keyword}"의 검색결과
      </div>
      <SearchHeader />
      <ProductSearchList itemData={productList} />
    </>
  );
}
