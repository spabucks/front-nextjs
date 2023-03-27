import React from 'react'

export interface handler {
  () : void
}

export default function StButton(props: { buttonText: string, textSize: string ,handler?: handler, type: "button" | "submit" | "reset"}) {
  return (
    <button type={props.type} onClick={props.handler} style={{fontSize: props.textSize}}>{props.buttonText}</button>
  )
}
