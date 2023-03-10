import React from 'react'

export default function ModalBackground(props:{isView:Boolean}) {

    if(!props.isView) {
        return null;
    }

    console.log(props.isView)
  return (
    <div className='modalBack'></div>
  )
}
