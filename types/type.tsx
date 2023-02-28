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