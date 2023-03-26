import SeachKeword from "@/components/ui/SeachKeword";
import { useState } from "react";
import { useEffect } from "react";
interface keyInterface {
  id: number;
  text: string;
}
export default function Search() {
  // 로컬 스토리지에 저장한 검색어를 관리할 useState keywords
  const [keywords, setKeywords] = useState<keyInterface[]>([]);

  // ① window 즉, 브라우저가 모두 렌더링된 상태에서 해당 함수를 실행할 수 있도록 작업
  useEffect(() => {
    if (typeof window !== "undefined") {
      const result = localStorage.getItem("keywords") || "[]";
      setKeywords(JSON.parse(result));
    }
  }, []);

  // ② keywords 객체를 의존하여, 변경될 경우 새롭게 localStroage의 아이템 'keywords'를 세팅한다
  useEffect(() => {
    localStorage.setItem("keywords", JSON.stringify(keywords));
  }, [keywords]);

  // 검색어 추가
  const handleAddKeyword = (text: string) => {
    const newKeyword = {
      id: Date.now(),
      text: text,
    };
    setKeywords([newKeyword, ...keywords]); /**.splice(0,10) */
  };

  // 단일 검색어 삭제
  const handleRemoveKeyword = (id: number) => {
    const nextKeyword = keywords.filter((keyword) => {
      return keyword.id != id;
    });
    setKeywords(nextKeyword);
  };

  //검색어 전체 삭제
  const handleClearKeywords = () => {
    setKeywords([]);
  };

  return (
    <>
      <div className="main-search-container">
        <SeachKeword onAddKeyword={handleAddKeyword}></SeachKeword>
        <section className="section-yessearch">
          <div className="section-search-container">
            <div className="section-yessearch-title">최근 검색어</div>
            {keywords.length>0 ? (
              <button
                type="button"
                onClick={handleClearKeywords}
                className="keywordalldelete"
              >
                전체 삭제
              </button>
            ) : (
              ""
            )}
          </div>
          <div className="section-search-total">
            {keywords.length && (
              keywords.map((value, idx) => (
                <div className="section-search-contents" key={idx}>
                  <div className="section-search-itemList">
                    <div className="section-search-itemList-tag">
                      {value.text}
                    </div>
                    <button
                      className="removeBtn"
                      type="button"
                      onClick={() => handleRemoveKeyword(value.id)}
                    >
                      <img src="assets/images/icons/close.svg" alt="개별삭제" />
                    </button>
                  </div>
                </div>
              ))
            ) }
            </div>
            {keywords.length==0 && (
              <section className="section-nosearch">
              <div className="section-search-item">
                <h3>최근 검색어가 없습니다.</h3>
              </div>
            </section>
            ) }

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
