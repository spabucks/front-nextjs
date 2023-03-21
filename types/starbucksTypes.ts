export interface headerMenu {
    id: number;
    name: string;
    link: string;
  }
  
  export interface loginData {
    email: string;
    password: string;
  }
  
  export interface productDataType {
    id: number,
    name: string,
    price: number,
    description: string,
    thumbnail: string,
    size: string,
    season: string
  }
  
  export interface chunsikDataType {
  
    categoryName: string,
    products: {
      id: number,
      description: string,
      name: string,
      price: number,
      size: string,
      thumbnail: string,
      season: string,
    }
  }
  