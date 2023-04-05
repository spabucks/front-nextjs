import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
export interface ButtonProps {
    handleAddCart: () => void;
}

export default function FooterChangeBtn(props:{handleAddCart: ButtonProps}) {


  const handleDirectPayment = () => {
    const BaseUrl = process.env.baseApiUrl;
    // axios
    //   .post(
    //     `${BaseUrl}/api/v1/purchaseTmp/add`,
    //     {
    //       cartId: ,
    //     },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    //       },
    //     }
    //   )
    //   .then((res) => router.push("/payment"))
    //   .catch((err) => {
    //     console.log("err");
    //   });
  };
  return (
    <>
      <div className="footer-charge-total-btn">
        <div>
        <Link href={`/cart`}>
          <Image src="../assets/images/icons/shopping-cart.svg" alt="cartimg" height={20} width={20}/>
        </Link>
        </div>
        {/* <button type="button">선물하기</button> */}
        <button type="button" onClick={handleDirectPayment}>구매하기</button>
      </div>
    </>
  );
}
