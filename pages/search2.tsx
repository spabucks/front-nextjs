import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

import Header from "@/components/sections/Header";
import SearchHeader from "@/components/pages/search/SearchHeader";
import ProductSearchList from "@/components/pages/search/ProductSearchList";

import { filterProductList } from "@/types/type";
import FirstHeader from "@/components/sections/FirstHeader";
import { useRecoilState } from "recoil";
import { recentSearchWord } from "@/state/recentSearchWord";
export default function search2() {
  const BaseUrl = process.env.baseApiUrl;
  const router = useRouter();
  const [productList, setProductList] = useState<filterProductList[]>([]);
  const [searchValue, setSearchValue] = useRecoilState(recentSearchWord);
  const { query } = useRouter();
  const [productCountCheck, SetProductCountCheck] = useState<boolean>(false);
  // console.log("product", productList);
  console.log("search start")
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
  }, []);

  useEffect(() => {
    if (productList.length === 0) {
      SetProductCountCheck(true);
    } else if (productList.length >= 1) {
      SetProductCountCheck(false);
    }
  }, [productList]);

  return (
    <>
      <FirstHeader />
      <div className="search-title">"{query.keyword}"의 검색결과</div>
      {productCountCheck ? (
        <div className="search-prodcut-title">검색 결과가 없습니다.</div>
        ) : (
        <>
          <SearchHeader />
          <ProductSearchList itemData={productList} />
        </>
      )}
    </>
  );
}
