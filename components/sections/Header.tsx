import Link from "next/link";
import {
  headerMenus,
  headerRightIcons,
  headerEventSubMenus,
  headerBestSubMenus,
} from "@/data/navMenuDatas";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";
import { categoryMenu } from "@/types/type";

export default function Header() {
  const router = useRouter();
  const categoryId: any = router.query.category;
  const BaseUrl = process.env.baseApiUrl;

  return (
    <header>
      <div className="main-header-top">
        <div className="main-header__menu-icon">
          <Link href={`/subpage`}>
            <Image
              src="assets/images/icons/menu.svg"
              alt=""
              width={20}
              height={20}
            ></Image>
          </Link>
        </div>
        <h1>온라인 스토어</h1>
        <nav>
          <ul>
            {headerRightIcons.map((menuIcon) => (
              <li key={menuIcon.id}>
                <Link href={menuIcon.link}>
                  <Image
                    width={20}
                    height={20}
                    src={menuIcon.icon}
                    alt={menuIcon.name}
                  ></Image>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
