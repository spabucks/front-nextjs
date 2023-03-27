import React, { Fragment } from 'react'

export default function Steper(props:{ stepId: number}) {

  const step = [
    { id: 1, text: '1' },
    { id: 2, text: '2' },
    { id: 3, text: '3' },
  ]
  if(props.stepId < 2) {
    return null;
  }
  return (
    <div className="check-stepline-number">
      {
        step.map((item) => (
          <Fragment key={item.id}>
            <p className={item.id === props.stepId - 1 ? "active" : ""}>{item.text}</p>
            { item.id === 3 ? "" : <div className="dash"></div> }
          </Fragment>
        ))
      }
    </div>
  )
}
