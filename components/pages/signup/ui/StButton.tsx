import React from 'react'

export interface handler {
  () : void
}

export default function StButton(props: { buttonText: string, textSize: string ,handler?: handler}) {
  return (
    <button onClick={props.handler} style={{fontSize: props.textSize}}>{props.buttonText}</button>
  )
}
