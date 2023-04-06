import axios from "axios";
import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { filterProductList } from "@/types/type";

import ProfuctFilterList from "@/components/pages/filter/ProductFilterList";
import FirstHeader from "@/components/sections/FirstHeader";
import FilterHeader from "@/components/pages/filter/FilterHeader";
import Loading from "@/components/ui/Loading";

export default function Filter() {
  const { asPath } = useRouter();
  const [productList, setProductList] = useState<filterProductList[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const BaseUrl = process.env.baseApiUrl;
    axios
      .get(`${BaseUrl}/api/v1/product/search2?${asPath.split("?")[1]}`)
      .then((res) => {
        setProductList(res.data.data);
        setIsLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [asPath]);

  return (
    <>
      <FirstHeader />
      <FilterHeader />
      {!isLoading && (
        <div style={{ height: "100vh" }}>
          <Loading />
        </div>
      )}
      {isLoading && <ProfuctFilterList itemData={productList} />}
    </>
  );
}
