import React from "react";
import Image from "next/image";

export default function Rightarrow() {
  return (
    <Image
      src="../assets/images/icons/left-chevron.svg"
      alt="arrow-right"
      className="right-arrow"
      width={20}
      height={20}
    ></Image>
  );
}
