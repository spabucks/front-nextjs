export interface cartListType {
    cartId: number;
    productId: number;
    bigCategoryId: number;
    count: number;
    productName: string,
    imgUrl: string,
    price: number,
    check?: boolean
  }
  
  export interface cartType {
    cartListFreeze: cartListType[];
    cartList: cartListType[];
    cartTotal  :cartListType[];
  }
