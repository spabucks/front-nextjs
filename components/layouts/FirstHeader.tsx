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
          {headerRightIcons.map(menuIcon=>(
               <li key={menuIcon.id}>
                <Image width={20} height={20} src={menuIcon.icon} alt={menuIcon.name}></Image>
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
    </header>
  );
}
