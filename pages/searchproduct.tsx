import React from 'react'

export default function searchproduct() {
  return (
    <div>
          <header>
        <div className="main-header-top borde">
          <div className="main-header__menu-icon">
            <img src="assets/images/icons/menu.svg" alt="" />
          </div>
          <h1>온라인 스토어</h1>
          <nav>
            <ul>
              <li><img src="assets/images/icons/search.svg" /></li>
              <li><img src="assets/images/icons/shopping-cart.svg" /></li>
              <li><img src="assets/images/icons/user.svg" /></li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="search-title">"춘식"의 검색결과</div>
      <div className="search-mainheader-sub border-under">
        <nav>
          <ul>
            <li>전체</li>
            <li className="active">케이크</li>
            <li>텀블러/보온병</li>
            <li>머그/컵</li>
            <li>라이프스타일</li>
            <li>티/커피용품</li>
            <li>세트</li>
          </ul>
        </nav>
      </div>
      <div className="search-subheader-sub ">
          <nav>
            <ul>
              <li className="active">용량</li>
              <li>Short</li>
              <li>Tall</li>
              <li>Grande</li>
              <li>Venti</li>
            </ul>
          </nav>
        </div>
        <div className="search-subheader-sub ">
          <nav>
            <ul>
              <li className="active">가격</li>
              <li>1만원미만</li>
              <li>1만원대</li>
              <li>2만원대</li>
              <li>3만원대</li>
              <li>4만원대</li>
              <li>5만원이상</li>
            </ul>
          </nav>
        </div>
        <div className="search-subheader-sub ">
          <nav>
            <ul>
              <li className="active">카테고리</li>
              <li>플라스틱 텀블러</li>
              <li>스테인리스 텀블러</li>
              <li>보온병</li>
              <li>콜드컵</li>
            </ul>
          </nav>
        </div>
        <div className="search-subheader-sub ">
          <nav>
            <ul>
              <li className="active">시즌</li>
              <li>커티스 쿨릭</li>
              <li>체리블라썸</li>
              <li>밸런타인데이</li>
              <li>NewYear</li>
              <li>데스크 컬렉션</li>
              <li>Chrismas</li>
              <li>여주자유cc</li>
              <li>데스크 컬렉션</li>
              <li>Chrismas</li>
              <li>여주자유cc</li>
            </ul>
          </nav>
        </div>
      <select name="pets" id="pet-select" className="select-sorting-category"> 
        <option value="">높은가격순</option>
        <option value="dog">높은가격순</option>
        <option value="cat">낮은가격순</option>
    </select>
    <section className="flex-wrap-product-lists">
        <div className="flex-wrap-product-list">
          <div className="flex-wrap-product">
            <div className="flex-wrap-product__img">
              <img
                src="assets/images/products/01.png"
                alt="23 SS 체리 밸류 로맨틱 텀블러 355ml"
              />
            </div>
            <div className="flex-wrap-product__info">
              <p className="product-item-new product-item-new-hidden">New</p>
              <p className="flex-wrap-product-title">
                23 SS 체리 밸류 로맨틱 텀블러 355ml
              </p>
              <p className="flex-wrap-product-price"><strong>32,000</strong>원</p>
            </div>
          </div>
          <div className="flex-wrap-product">
            <div className="flex-wrap-product__img">
              <img
                src="assets/images/products/01.png"
                alt="23 SS 체리 밸류 로맨틱 텀블러 355ml"
              />
            </div>
            <div className="flex-wrap-product__info">
              <p className="product-item-new product-item-new-hidden">New</p>
              <p className="flex-wrap-product-title">
                23 SS 체리 밸류 로맨틱 텀블러 355ml
              </p>
              <p className="flex-wrap-product-price"><strong>32,000</strong>원</p>
            </div>
          </div>
          <div className="flex-wrap-product">
            <div className="flex-wrap-product__img">
              <img
                className="flex-wrap-product__soldout"
                src="assets/images/products/01.png"
                alt="23 SS 체리 밸류 로맨틱 텀블러 355ml"
              />
              <p className="flex-wrap-product__soldout_title">일시품절</p>
            </div>
            <div className="flex-wrap-product__info">
              <p className="product-item-new product-item-new-hidden">New</p>
              <p className="flex-wrap-product-title">
                23 SS 체리 밸류 로맨틱 텀블러 355ml
              </p>
              <p className="flex-wrap-product-price"><strong>32,000</strong>원</p>
            </div>
          </div>
          <div className="flex-wrap-product">
            <div className="flex-wrap-product__img">
              <img
                className="flex-wrap-product__soldout"
                src="assets/images/products/01.png"
                alt="23 SS 체리 밸류 로맨틱 텀블러 355ml"
              />
              <p className="flex-wrap-product__soldout_title">일시품절</p>
            </div>
            <div className="flex-wrap-product__info">
              <p className="product-item-new product-item-new-hidden">New</p>
              <p className="flex-wrap-product-title">
                23 SS 체리 밸류 로맨틱 텀블러 355ml
              </p>
              <p className="flex-wrap-product-price"><strong>32,000</strong>원</p>
            </div>
          </div>
          <div className="flex-wrap-product">
            <div className="flex-wrap-product__img">
              <img
                className="flex-wrap-product__soldout"
                src="assets/images/products/01.png"
                alt="23 SS 체리 밸류 로맨틱 텀블러 355ml"
              />
              <p className="flex-wrap-product__soldout_title">일시품절</p>
            </div>
            <div className="flex-wrap-product__info">
              <p className="product-item-new product-item-new-hidden">New</p>
              <p className="flex-wrap-product-title">
                23 SS 체리 밸류 로맨틱 텀블러 355ml
              </p>
              <p className="flex-wrap-product-price"><strong>32,000</strong>원</p>
            </div>
          </div>
          <div className="flex-wrap-product">
            <div className="flex-wrap-product__img">
              <img
                className="flex-wrap-product__soldout"
                src="assets/images/products/01.png"
                alt="23 SS 체리 밸류 로맨틱 텀블러 355ml"
              />
              <p className="flex-wrap-product__soldout_title">일시품절</p>
            </div>
            <div className="flex-wrap-product__info">
              <p className="product-item-new product-item-new-hidden">New</p>
              <p className="flex-wrap-product-title">
                23 SS 체리 밸류 로맨틱 텀블러 355ml
              </p>
              <p className="flex-wrap-product-price"><strong>32,000</strong>원</p>
            </div>
          </div>
          <div className="flex-wrap-product">
            <div className="flex-wrap-product__img">
              <img
                className="flex-wrap-product__soldout"
                src="assets/images/products/01.png"
                alt="23 SS 체리 밸류 로맨틱 텀블러 355ml"
              />
              <p className="flex-wrap-product__soldout_title">일시품절</p>
            </div>
            <div className="flex-wrap-product__info">
              <p className="product-item-new product-item-new-hidden">New</p>
              <p className="flex-wrap-product-title">
                23 SS 체리 밸류 로맨틱 텀블러 355ml
              </p>
              <p className="flex-wrap-product-price"><strong>32,000</strong>원</p>
            </div>
          </div>
          <div className="flex-wrap-product">
            <div className="flex-wrap-product__img">
              <img
                className="flex-wrap-product__soldout"
                src="assets/images/products/01.png"
                alt="23 SS 체리 밸류 로맨틱 텀블러 355ml"
              />
              <p className="flex-wrap-product__soldout_title">일시품절</p>
            </div>
            <div className="flex-wrap-product__info">
              <p className="product-item-new product-item-new-hidden">New</p>
              <p className="flex-wrap-product-title">
                23 SS 체리 밸류 로맨틱 텀블러 355ml
              </p>
              <p className="flex-wrap-product-price"><strong>32,000</strong>원</p>
            </div>
          </div>
          <div className="flex-wrap-product">
            <div className="flex-wrap-product__img">
              <img
                className="flex-wrap-product__soldout"
                src="assets/images/products/01.png"
                alt="23 SS 체리 밸류 로맨틱 텀블러 355ml"
              />
              <p className="flex-wrap-product__soldout_title">일시품절</p>
            </div>
            <div className="flex-wrap-product__info">
              <p className="product-item-new product-item-new-hidden">New</p>
              <p className="flex-wrap-product-title">
                23 SS 체리 밸류 로맨틱 텀블러 355ml
              </p>
              <p className="flex-wrap-product-price"><strong>32,000</strong>원</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
