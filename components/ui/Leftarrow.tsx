import React from "react";
import Image from "next/image";

export default function Leftarrow() {
  return (
    <>
      <Image
        className="sub-change-left-icon"
        src="assets/images/icons/left-chevron.svg"
        alt="왼쪽화살표버튼"
        height={50}
        width={50}
      ></Image>
    </>
  );
}
