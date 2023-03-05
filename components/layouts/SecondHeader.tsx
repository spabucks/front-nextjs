import Link from "next/link";
import { headerMenus, headerRightIcons } from "@/data/navMenuDatas";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
export default function SecondHeader() {
  return (
    <header>
    <div className="sub-header">
      <img src="../assets/images/icons/left-chevron.svg" alt="메뉴아이콘" />
      <p className="sub-header-title">온라인스토어</p>
      <img src="../assets/images/icons/close.svg" alt="닫기아이콘"/>
    </div>
  </header>
  );
}
