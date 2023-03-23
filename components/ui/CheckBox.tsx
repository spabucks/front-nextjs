import React from "react";

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
      <div className="agree-check">
        <div className="m-agree">
          <input 
             type="checkbox" 
             id="tos-agree" 
             name={props.inputName} 
             onChange = { props.handler && props.handler } 
             checked = { props.value && props.value }
              />
          <label>{props.lableText}</label>
          <hr />
          <img src="../assets/images/icons/left-chevron.svg"
               alt=""
               className="membership-firststep-arrow"
                />
        </div>
      </div>
    </>
  );
}
