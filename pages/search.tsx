import SeachKeyword from "@/components/ui/SeachKeyword";
import { recentSearchWord } from "@/state/recentSearchWord";
import { useRecoilState } from "recoil";
import Link from "next/link";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import Image from "next/image"
import SearchNotWord from "@/components/ui/SearchNotWord";
import RecommendTagList from "@/components/ui/RecommendTagList";
import CloseBtn from "@/components/ui/CloseBtn";
export default function Search() {
  const [recentWordsBox, setRecentWordsBox] = useRecoilState(recentSearchWord);

  const handleRemoveKeyword = (text: string) => {
    setRecentWordsBox((prev) => prev.filter((item) => item !== text));
  };

  const handleClearKeywords = () => {
    Swal.fire({
      icon: "info",
      text: "최근 검색어를 모두 삭제하시겠습니까?",
      cancelButtonText: "취소",
      showCancelButton: true,
      customClass: {
        confirmButton: "swal-confirm-button",
        cancelButton: "swal-cancel-button",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        setRecentWordsBox([]);
      }
    });
  };
  return (
    <>
      <div className="main-search-container">
        <SeachKeyword />
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
                    <Link
                      href={`/search2?keyword=${item}&bigCategory=0`}
                      className="recent-words-direct"
                    >
                      {item}
                    </Link>
                  </div>

                  <button
                    className="removeBtn"
                    type="button"
                    onClick={() => handleRemoveKeyword(item)}
                  >
                    <CloseBtn/>
                  </button>
                </div>
              </div>
            ))}
          </div>
          {recentWordsBox.length === 0 && (
           <SearchNotWord/>
          )}
        </section>

       <RecommendTagList/>
      </div>
    </>
  );
}
