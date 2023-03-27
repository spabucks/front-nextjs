import React, { ChangeEvent, useState } from "react";
import Link from "next/link";

import Image from "next/image";
import { useRecoilState } from "recoil";
import { recentSearchWord } from "@/state/recentSearchWord";
import Router from "next/router";
import { useRouter } from "next/router";
export default function SeachKeword() {

  const [searchValue, setSearchValue] = useRecoilState(recentSearchWord);
  const [inputData, setInputData] = useState<string>('')
  const { query, asPath } = useRouter();
  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value)
  }
console.log('queryqueryqueryquery',query)
  const handleSearchKeyword = () => {
    if ( !searchValue.includes(inputData) ) {
      setSearchValue((prev) => [...prev, inputData]);
      Router.push(`/search2?keyword=${inputData}`);
    }
    setInputData('')
  }


  return (
    <>
      <div className="form-search">
        <form className="search-keyword">
          
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
              <Image
                src={"assets/images/icons/close.svg"}
                className="search-item-close"
                alt="search"
                height={20}
                width={20}
              />
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
