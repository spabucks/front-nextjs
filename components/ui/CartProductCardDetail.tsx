import React, { use, useState } from 'react'
import { setTimeout } from 'timers/promises'
export interface ChildProps {
    isClick?: Boolean,
    setIsClick?: React.Dispatch<React.SetStateAction<Boolean>>,
    data: {title:string, price:number}
  }
export function ShowModal(){
  return(
    <div className="buy-announcement-show">해당 상품은 회원당 최대 5개까지 구매 가능합니다.</div>
  )
}
export default function CartProductCardDetail({data, isClick, setIsClick}:ChildProps) {
  const [count, setCount]=useState(1)
  console.log('count',count)
    const handleView = () => {
        setIsClick && setIsClick(!isClick)
    }
  return (
    <div className="buy-product-lists border-top">
        
        <div className='view-btn' onClick={handleView}></div>
        {
            isClick ? 
            <>
            <div className="buy-product-list">
            <p>{data.title}</p>
            <div className="buy-product-count-charge">
                <div className="buy-product-count">
                {count>1? <button onClick={() => {setCount(count - 1)}}>-</button> : <button>-</button> }
                <p>{count}</p>
                {count<5? <button onClick={() => {setCount(count + 1)}}>+</button> : <button>+</button> }
                </div>
                <div className="buy-product-charge">{data.price*count}원</div> 
            </div>
            </div>
            {count ===5 && <ShowModal/>}
            <div className="buy-product-total">
            <p>합계 {data.price*count}원</p>
            </div>
            </>
            :
            ""
        }
      </div>
  )
}
