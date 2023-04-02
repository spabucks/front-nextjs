import React from "react";
import Image from "next/image";

export default function Leftarrow() {
  return (
    <>
      <Image
        className="sub-change-left-icon"
        src="assets/images/icons/left-chevron.svg"
        alt="왼쪽화살표버튼"
        height={30}
        width={30}
      ></Image>
    </>
  );
}
