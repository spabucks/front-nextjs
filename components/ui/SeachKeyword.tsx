import React, { ChangeEvent, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Router from "next/router";

import { useRecoilState } from "recoil";
import { recentSearchWord } from "@/state/recentSearchWord";
import CloseBtn from "./CloseBtn";

export default function SeachKeword() {
  const [searchValue, setSearchValue] = useRecoilState(recentSearchWord);
  const [inputData, setInputData] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };
  const handleSearchKeyword = () => {
    //최근 검색어에 inputData가 포함되어있지않으면?
    if (!searchValue.includes(inputData) && inputData.length > 0) {
      Router.push(`/search2?keyword=${inputData}`);
      setSearchValue((prev) => [inputData, ...prev.slice(0, 9)]);
      setInputData("");
      //최근 검색어에 inputData가 포함되어있으면?
    } else if (searchValue.includes(inputData) && inputData.length > 0) {
      Router.push(`/search2?keyword=${inputData}`);
      const newList = [
        inputData,
        ...searchValue.filter((item) => item !== inputData),
      ];
      setInputData("");
      setSearchValue(newList.slice(0, 10));
    }
  };
  return (
    <>
      <div className="form-search">
        <form className="search-keyword">
          <div className="search-keyword-title">
            <input
              name="searchWord"
              type="text"
              id="searchword"
              placeholder="검색어를 입력해주세요"
              value={inputData && inputData}
              onChange={handleChange}
            />
            <div className="search-icons">
              <Image
                src={"assets/images/icons/search.svg"}
                className="search-item-icon"
                alt="search"
                height={20}
                width={20}
                onClick={handleSearchKeyword}
              />
              <Link href="/">
                <CloseBtn />
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
