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
}
/** */

export interface categoryMenu {
    id: number,
    name: string
}