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
  const [first, setFirst] = useState<boolean>(true);

  const [searchValue, setSearchValue] = useRecoilState(recentSearchWord);
  const [check,setCheck]=useState<boolean>(true);
  const { query } = useRouter();
  console.log("search start");

  useEffect(() => {
    const keyword = router.asPath.split("?keyword=")[1];
    axios
      .get(`${BaseUrl}/api/v1/product/search2?keyword=${keyword}&bigCategory=0`)
      .then((res) => {
        setProductList(res.data.data)
        if(res.data.data.length!==0) {
          setCheck(false) //검색결과 있음
          setFirst(false);
        } else {
          setCheck(true) //검색결과 없음
        }
      })
      .catch((err) => {
        console.log(err);
      });
      
  }, [router]);

  return (
    <>

      <FirstHeader />
      <div className="search-title">"{query.keyword}"의 검색결과</div>

      {check===true && first===true ?  <div className="search-prodcut-title">검색 결과가 없습니다.</div> :
      <> <div className={first===true ? "hide":""}>
      <SearchHeader/>
      <ProductSearchList productData={productList} />
      </div></>
      }
    </>
  );
}
