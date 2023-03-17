import { constants } from "buffer";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { recentSearchWord } from "../state/recentSearchWord";
import { InputType } from "zlib";
import Link from "next/link";

export default function Search() {
  const [recentWords, setRecentWords] = useRecoilState(recentSearchWord);
  const [input, setInput] = useState<string>();
  const [valueList, setValueList] = useState<string[]>([]);
      if (typeof input !== "undefined") {
      // setValueList([...valueList,input]);
        setRecentWords([...recentWords, input]);
    }
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setInput(value);
  };
  const handleSubmit: any = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="main-search-container">
        <div className="form-search">
          <form className="search-keyword" onSubmit={handleSubmit}>
            <input
              // onChange={handleInputChange}
              name="searchWord"
              type="text"
              id="searchword"
              placeholder="검색어를 입력해주세요"
            />
            <div className="search-icons">
              <img
                className="search-item-icon"
                src="assets/images/icons/search.svg"
              />
              <Link href="/">
                <img
                  className="search-item-close"
                  src="assets/images/icons/close.svg"
                />
              </Link>
            </div>
          </form>
        </div>
        {/**검색어가 없을때 해당 태그 사용 */}
        {/** 
          <section className="section-nosearch">
            <div className="section-search-item">
              <h3>최근 검색어가 없습니다.</h3>
            </div>
          </section>
          */}

        {/**검색어가 있을 경우 해당 태그 사용 */}
        <section className="section-yessearch">
          <div className="section-yessearch-title">최근 검색어</div>
          <div className="section-search-total">
            {recentWords.map((value, idx) => (
              <div className="section-search-contents" key={idx}>
                <div className="section-search-itemList">
                  <div className="section-search-itemList-tag">{value}</div>
                  <img
                    className="section-search-itemList-close"
                    src="assets/images/icons/close.svg"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="section-search-tag">
            <h3>추천태그</h3>
            <div className="section-search-tags">
              <div className="search-item">#케이크</div>
              <div className="search-item">#리유저블</div>
              <div className="search-item">#도트머그</div>
            </div>
            <div className="section-search-tags">
              <div className="search-item">#리드</div>
              <div className="search-item">#그린코어</div>
              <div className="search-item">#핸디 데스크</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
