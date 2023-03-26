import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useCallback } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { recentSearchWord } from "@/state/recentSearchWord";
import Image from "next/image";
type Props = {
  onAddKeyword: (string: string) => void;
}
export default function SeachKeword({ onAddKeyword }: Props) {
  // ① props로 전달받은 onAddKeyword의 데이터로 들어갈 state이다
  // const [searchValue, setSearchValue] = useState<string>('')
  const [searchValue, setSearchValue] = useState<string>("");
  const router = useRouter();
  const onChangeSearch = useCallback((e: any) => {
    setSearchValue(e.target.value);
  }, []);
  const onSubmit = useCallback((e: any) => {
    e.preventDefault();
    // ② 로컬 스토리지에 해당 searchValue를 저장해야 한다
    // ③ 다이나믹 라우팅을 위해 해당 쿼리를 받을 페이지로 push 해주었다
    router.push(`/search2?keyword=${searchValue}`);
    onAddKeyword(searchValue);
    setSearchValue("");
  }, [searchValue, router, onAddKeyword]
  )


  return (
    <>
      <div className="form-search">
        <form className="search-keyword" onSubmit={onSubmit}>
          <input
            name="searchWord"
            type="text"
            id="searchword"
            value={searchValue}
            onChange={onChangeSearch}
            placeholder="검색어를 입력해주세요"
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
        </form>
      </div>
    </>
  );
}
