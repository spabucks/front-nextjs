export interface orderProductType{
   cartId: number;
    count : number;
    imgUrl:string;
    price:number;
    productId:number;
    productName:string;
  }
  
  export interface totalOrderProductType{
    amount: number;
     image: string;
     or_status:string;
     orderData:string;
     paymentNum:string;
     productName:string;
     sp_status:string;
     sum:5;
     type:boolean
   }
   export interface totalOrderListsType{
    amount: number;
     id: number;
     image:string;
     list:[];
     orderDate:string;
     orderName:string;
     paymentNum:string;
     sp_status:string;
     sum:5;
   }