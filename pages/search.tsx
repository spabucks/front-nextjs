import SeachKeword from "@/components/ui/SeachKeword";
import { recentSearchWord } from "@/state/recentSearchWord";
import { useRecoilState } from "recoil";

export default function Search() {

  const [recentWordsBox, setRecentWordsBox] = useRecoilState(recentSearchWord);

  const handleRemoveKeyword = (text:string) => {
    setRecentWordsBox((prev)=>prev.filter(item=>item!==text))
  };

  const handleClearKeywords = () => {
    setRecentWordsBox([]);
  }

  return (
    <>
      <div className="main-search-container">
        <SeachKeword />
        <section className="section-yessearch">
          <div className="section-search-container">
            <div className="section-yessearch-title">최근 검색어</div>
            {recentWordsBox ? (
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
            {recentWordsBox.map((item, idx) => (
              <div className="section-search-contents" key={idx}>
                <div className="section-search-itemList">
                  <div className="section-search-itemList-tag">
                    {item}
                  </div>
                  <button
                    className="removeBtn"
                    type="button"
                    onClick={() => handleRemoveKeyword(item)}
                  >
                    <img src="assets/images/icons/close.svg" alt="개별삭제" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          { !recentWordsBox && (
            <section className="section-nosearch">
              <div className="section-search-item">
                <h3>최근 검색어가 없습니다.</h3>
              </div>
            </section>
          )}
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
