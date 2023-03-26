import Link from "next/link";
import { headerMenus, headerRightIcons } from "@/data/navMenuDatas";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
export default function SecondHeader() {
  return (
    <header>
    <div className="main-header-top">
      <img src="../assets/images/icons/left-chevron.svg" alt="뒤로가기" />
      <Link href='/' className="mainpage-link"><h1>온라인 스토어</h1></Link>
      <img src="../assets/images/icons/close.svg" alt="닫기아이콘"/>
    </div>
  </header>
  );
}
