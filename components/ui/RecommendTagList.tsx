import React from "react";
import Link from "next/link";

export default function RecommendTagList() {
  return (
    <>
      <section>
        <div className="section-search-tag">
          <h3>추천태그</h3>
          <div className="section-search-tags">
            <Link href={`/search2?keyword=케이크&bigCategory=0`}>
              <div className="search-item">#케이크</div>
            </Link>
            <Link href={`/search2?keyword=리유저블&bigCategory=0`}>
              <div className="search-item">#리유저블</div>
            </Link>
            <Link href={`/search2?keyword=민트&bigCategory=0`}>
              <div className="search-item">#민트</div>
            </Link>
          </div>
          <div className="section-search-tags">
            <Link href={`/search2?keyword=리드&bigCategory=0`}>
              <div className="search-item">#리드</div>
            </Link>
            <Link href={`/search2?keyword=체리&bigCategory=0`}>
              <div className="search-item">#체리</div>
            </Link>
            <Link href={`/search2?keyword=버즈&bigCategory=0`}>
              <div className="search-item">#버즈</div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
