import Link from "next/link";
import { headerMenus, headerRightIcons } from "@/data/navMenuDatas";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function FirstHeader() {
  const router = useRouter();
  console.log(router);
  console.log(router.pathname);

  return (
    <header>
      <div className="main-header-top">
        <div className="main-header__menu-icon">
          <img src="assets/images/icons/menu.svg" alt="" />
        </div>
        <h1>온라인 스토어</h1>
        <nav>
          <ul>
            {headerRightIcons.map((menuIcon) => (
              <li key={menuIcon.id}>
                <Image
                  width={20}
                  height={20}
                  src={menuIcon.icon}
                  alt={menuIcon.name}
                ></Image>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="main-header-bottom border-under">
        <nav>
          <ul>
            {headerMenus.map((menu) => (
              <li
                key={menu.id}
                className={router.pathname === menu.link ? "active" : ""}
              >
                <Link href={menu.link}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      { router.pathname === "/best" ?  <div className="main-header-sub">
      <nav>
        <ul>
          <li>케이크</li>
          <li className="active">텀블러/보온병</li>
          <li>머그/컵</li>
          <li>라이프스타일</li>
          <li>티/커피용품</li>
          <li>세트</li>
        </ul>
      </nav>
    </div> :
     ''
      }
       { router.pathname === "/event" ?  <div className="main-header-sub">
       <nav>
        <ul>
          <li>케이크</li>
          <li className="active">바리스트춘식</li>
          <li>핸디데스크</li>
          <li>별⭐적립혜택</li>
        </ul>
      </nav>
    </div> :
     ''
      }
    </header>
  );
}
