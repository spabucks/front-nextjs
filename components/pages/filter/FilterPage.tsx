import Link from "next/link";
import { headerRightIcons } from "@/data/navMenuDatas";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { categoryMenu } from "@/types/type";

export default function () {
  const router = useRouter();
  const categoryId: any = router.query.category;
  const BaseUrl = process.env.baseApiUrl;
  /** 베스트 카테고리 관련 변수저장*/
  const [categoryBestMenus, setCategoryBestMenus] = useState<categoryMenu[]>(
    []
  );
  /** 가격 관련 변수저장 */
  const [categoryChargeMenus, setCategoryChargeMenus] = useState<
    categoryMenu[]
  >([]);
  return (
    <header>
      <div className="main-header-top">
        <div className="main-header__menu-icon">
          <Link href={`/subpage`}>
            <img src="assets/images/icons/menu.svg" alt="" />
          </Link>
        </div>
        <Link href={`/`} className="mainpage-link">
          <h1>온라인 스토어</h1>
        </Link>
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
      {/*전체 메뉴에 대한 api 받아오기*/}
      <div className="main-header-sub">
        <nav>
          <ul>
            {categoryBestMenus.map((eventSubMenu) =>
              eventSubMenu.image === "" ? null : (
                <li key={eventSubMenu.id}>
                  <Link
                    href={`/event?category=${eventSubMenu.id}`}
                    className={
                      eventSubMenu.id == categoryId
                        ? "main_header-sub-click "
                        : "main_header-sub-nonclick"
                    }
                  >
                    {eventSubMenu.name}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
