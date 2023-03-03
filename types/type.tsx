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

export interface detailProduct{
    id :number,
    title:string,
    description:string,
    imgUrl:string,
    price:number,
    productDetailImgUrl:string[]
}

export interface recommandproduct {
    id: number,
    name :string,
    data : [productCardData]
}
export interface productList{
    id : number,
    title : string,
    imgUrl : string,
    price : number,
    isNew : boolean
}

export interface categoryMenu {
    id: number,
    name: string
}