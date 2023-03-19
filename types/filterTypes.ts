export interface filterMenuType {
    id: Number;
    name: String;
    categoryId: Number;
    subCategory: [filterSubCategoryType]  
  }
  export interface bigCategoryType{
    name:string;
    index: number;
  }
  export interface filterSubCategoryType {
    id: Number;
    name: String;
    menu: [filterCategorySubType]
  } 
  
  export interface filterCategorySubType {
    id: Number;
    name: String;
    subCategoryId: Number;
  }
  
  export interface smallCategoryType {
    name: String;
    bigCategory: String;
  }
  
  export interface sizeType {
    name: String;
  }
  
  export interface filterType {
    name: String,
    value: String,
    checked: Boolean
  }
  export interface pricecategoryType{
    title:string,
    data:pricefiltercategorydataType[],
  }
  export interface pricefiltercategorydataType{
    name:string,
  }

  export interface filtercategoryType{
    title:string,
    data:filtercategorydataType[],
    
  }
    export interface filtercategorydataType{
    id:number,
    name:string,
  }
  export interface setcategoryType{
    id:Number,
    name:String
  }

/**cakecategorymenu Type */
  export interface cakecategoryType{
    id:number,
    title:string,
    data:cakecategoryDataType[]
   }
  export interface cakecategoryDataType{
    id: number,
    name: string

  }
  /*상품별 데이터 타입*/
  export interface productType {
    productId: Number,
    bigCategory: string,
    smallCategory: String,
    event: String,
    tag: String,
    productName: String,
    imgUrl: String,
    price: Number,
    size: String,
    amount: Number,
    isNew: Boolean,
    isBest: Boolean,
  }