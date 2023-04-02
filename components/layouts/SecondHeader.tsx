import Link from "next/link";
import { useRouter } from "next/router";
export default function SecondHeader(props:{title:string}) {
  const router = useRouter()
  return (
    <header>
    <div className="second-header-top">
      <img src="../assets/images/icons/left-chevron.svg" alt="뒤로가기" onClick={() => router.back()} />
      <Link href='/' className="mainpage-link"><h1>{props.title}</h1></Link>
      <img src="../assets/images/icons/close.svg" alt="닫기아이콘" onClick={()=>router.push('/')}/>
    </div>
  </header>
  );
}
