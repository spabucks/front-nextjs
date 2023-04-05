import React from "react";
import Link from "next/link";
import Image from "next/image";
export interface handleInput {
  (e: React.ChangeEvent<HTMLInputElement>): void;
}

export default function CheckBox(props: {
  lableText: string;
  isArrow: boolean;
  inputName: string;
  link: string;
  value?: boolean;
  handler?: handleInput;
}) {
  return (
    <>
      <div className="m-check-agree-container">
        <div>
          <input
            type="checkbox"
            id="tos-agree"
            name={props.inputName}
            onChange={props.handler && props.handler}
            checked={props.value && props.value}
          />
          <label>{props.lableText}</label>
        </div>
        <Link href={props.link && props.link}>
          {props.isArrow && (
            <Image
              className="agree-check-arrow"
              src="assets/images/icons/left-chevron.svg"
              alt="화살표 이미지"
              height={20}
              width={20}
            />
          )}
        </Link>
      </div>
    </>
  );
}
