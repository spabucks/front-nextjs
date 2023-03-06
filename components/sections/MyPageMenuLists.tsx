import { myMenuList } from "@/types/type"
import { useState } from "react"
import MyPageMenuList from "../ui/MyPageMenuList"
export default function MyPageMenuLists(){
    return(
        <>
          <section className="main-service">
          <p className="main-service-title">서비스</p>
          <div className="main-service-lists">


          <MyPageMenuList/>
          <MyPageMenuList/>
          </div>
        </section>
        </>
    )
}