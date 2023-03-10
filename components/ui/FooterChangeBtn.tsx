import Link from "next/link";
export interface ButtonProps {
    handleAddCart: () => void;
}

export default function FooterChangeBtn(props:{handleAddCart: ButtonProps}) {
  return (
    <>
      <div className="footer-charge-total-btn">
  
        <div>
        <Link href={`/cart`}>
        <img src="../assets/images/icons/shopping-cart.svg" alt="arrow-right" />
        </Link>
        </div>
        <button type="button">선물하기</button>
        <button type="button">구매하기</button>
      </div>
    </>
  );
}
