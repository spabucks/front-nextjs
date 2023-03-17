/** Index 관련 타입 지정 */
export interface recommandData {
    id: number,
    name :string,
    data : [productCardData]
}

export interface productCardData {
    id : number,
    title : string,
    imgUrl : string,
    price : number,
    isNew : boolean
}
/** */

/**상품상세보기 페이지 타입지정 */
export interface detailProduct{
    id :number,
    title:string,
    description:string,
    imgUrl:string,
    price:number,
    productDetailImgUrl:string[]
}
/** */

/*상품 상세보기 페이지 내 추천상품 관련 타입지정*/
export interface recommandproduct {
    id: number,
    name :string,
    data : [productCardData]
}
/** */

/** BEST 관련 타입 지정 */
export interface productBestList{
    id : number,
    title : string,
    imgUrl : string,
    price : number,
    isNew : boolean,
}
/** */
/** EVENT 관련 타입 지정 */
export interface productEventList {
    id: number,
    imgUrl:string,
    data : [eventProductList]
}
export interface eventProductList{
    id : number,
    title : string,
    imgUrl : string,
    price : number,
    isNew : boolean,
    isBest :boolean,
}
/** */

export interface categoryMenu {
    id: number,
    name: string,
    image: string
}
export interface subPageMenu{
    title:string,
    context:string
}

export interface myMenuList{
    id:number,
    title:string,
    data:[]
}
export interface myMenuLists{
    id:number,
    icon:string,
    title:string,
    arrowicon:string
}
/**검색할 데이터 */
export interface searchValue{
    word : string
}
/**슬라이드 */
export interface slide{
    eventid : number,
    name:string,
    imageUrl:string 
}
export interface cartData{
itemNumber:number,
generalitems:[cartuseritem],
freezeitems:[cartuseritem]
}
export interface cartuseritem{
    cartId: number,
    productId: number,
    bigCategoryId : number,
    count : number
}
export interface cartInfo {
    productName : string,
    imgUrl : string,
    price : number,
}
export interface orderListType {
    cartId: number,
    count: number,
    price: number,
    bigCategoryId:number
}

export interface orderListSumType {
    generalSum: number,
    freezeSum: number,
    allSum: number
}