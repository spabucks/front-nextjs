import React from "react";
import Image from "next/image";
export default function CloseBtn() {
  return (
    <>
      <Image
        src="../assets/images/icons/close.svg"
        alt="삭제버튼"
        width={20}
        height={20}
      ></Image>
    </>
  );
}
