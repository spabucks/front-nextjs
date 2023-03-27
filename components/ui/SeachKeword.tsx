import React, { ChangeEvent, useState } from "react";
import Link from "next/link";

import Image from "next/image";
import { useRecoilState } from "recoil";
import { recentSearchWord } from "@/state/recentSearchWord";

export default function SeachKeword() {
  // ① props로 전달받은 onAddKeyword의 데이터로 들어갈 state이다
  const [searchValue, setSearchValue] = useRecoilState(recentSearchWord);
  const [inputData, setInputData] = useState<string[]>([])

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    const data:string = e.target.value
    let newData = ;
    setInputData()
  }
  const handleSearchKeyword = () => {
   
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
            onChange={handleChange}
          />
          <div className="search-icons">
            <Image
              src={"assets/images/icons/search.svg"}
              className="search-item-icon"
              alt="search"
              height={20}
              width={20}
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
          <button type="button" onClick={()=>handleSearchKeyword(inputData)}>go</button>
        </form>
      </div>
    </>
  );
}
