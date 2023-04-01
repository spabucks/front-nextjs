import Link from "next/link";
import Image from "next/image";
export interface ButtonProps {
    handleAddCart: () => void;
}

export default function FooterChangeBtn(props:{handleAddCart: ButtonProps}) {

  return (
    <>
      <div className="footer-charge-total-btn">
        <div>
        <Link href={`/cart`}>
          <Image src="../assets/images/icons/shopping-cart.svg" alt="cartimg" height={20} width={20}/>
        </Link>
        </div>
        <button type="button">선물하기</button>
        <button type="button">구매하기</button>
      </div>
    </>
  );
}
