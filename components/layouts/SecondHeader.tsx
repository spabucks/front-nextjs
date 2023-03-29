import Link from "next/link";
import { useRouter } from "next/router";
export default function SecondHeader() {
  const router = useRouter()
  return (
    <header>
    <div className="main-header-top">
      <img src="../assets/images/icons/left-chevron.svg" alt="뒤로가기" onClick={() => router.back()} />
      <Link href='/' className="mainpage-link"><h1>온라인 스토어</h1></Link>
      <img src="../assets/images/icons/close.svg" alt="닫기아이콘" onClick={()=>router.push('/')}/>
    </div>
  </header>
  );
}
