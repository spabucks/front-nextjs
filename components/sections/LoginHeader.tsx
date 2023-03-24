import Image from "next/image";
import Link from "next/link";
export default function LoginHeader() {
  return (
    <header>
      <div className="login-header">
        {/* <img src="" alt="메뉴아이콘" /> */}
        <Image
          src="../assets/images/icons/left-chevron.svg"
          alt="메뉴아이콘"
          width={20}
          height={20}
        ></Image>
        <p className="login-header-title">로그인</p>
        <Link href="\">
          <Image
            src="../assets/images/icons/close.svg"
            alt="닫기아이콘"
            width={20}
            height={20}
          ></Image>
        </Link>
      </div>
    </header>
  );
}
