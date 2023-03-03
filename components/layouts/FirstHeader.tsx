import Link from "next/link";
import { headerMenus, headerRightIcons, headerEventSubMenus, headerBestSubMenus } from "@/data/navMenuDatas";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";
import { categoryMenu } from "@/types/type";

export default function FirstHeader() {
  const router = useRouter();
  const cateId:any = router.query.category;
  // console.log(router);
  // console.log(router.pathname);

  const [categoryMenus, setCategoryMenus] = useState<categoryMenu[]>([])

  useEffect(() => {
    axios.get('http://10.10.10.173:8081/api/v1/bigCategory/get/all')
    .then( res => {
      // console.log(res.data)
      setCategoryMenus(res.data)
    })
    .catch( err => {
      console.log(err)
    })
  },[])

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
      { router.pathname === "/best" &&  <div className="main-header-sub">
      <nav>
        <ul>
          {categoryMenus.map((category)=>(
            <li 
              key={category.id}
              className={ category.id == cateId ? 'active' : ''}
            >
              <Link href={`/best?category=${category.id}`}>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div> 
      }
       { router.pathname === "/event" &&  <div className="main-header-sub">
       <nav>
        <ul>
        {headerEventSubMenus.map((eventSubMenu)=>(
            <li key={eventSubMenu.id}
            className={router.pathname === eventSubMenu.link ? "active" : ""}
            >
              <Link href={eventSubMenu.link}>{eventSubMenu.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div> 
      }
    </header>
  );
}
