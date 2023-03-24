import React from 'react'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { useEffect } from 'react'
import { cartType } from '@/types/cartTypes'
import { cartListState } from '@/state/cartListState'
export default function CartMenu() {
    
  const [cartList, setCartList] = useRecoilState<cartType>(cartListState)
  const [listAllCheck, setListAllCheck] = useState(false)
  useEffect(() => {
    let check = true
    let freezeCheck = true
    cartList.cartList.find(item => item.check === false) ? check = false : check = true
    cartList.cartListFreeze.find(item => item.check === false) ? freezeCheck = false : freezeCheck = true
    if (check && freezeCheck) {
      setListAllCheck(true)
    } else {
      setListAllCheck(false)
    }
  },[cartList])

  const AllDeleteCheck =()=>{
    setCartList("")
  }

  const handleAllCheck = (check:boolean) => {
    setListAllCheck(!check)
    setCartList({
      ...cartList,
      cartList: cartList.cartList.map(item => {
        return {...item, check: !check}
      }),
      cartListFreeze: cartList.cartListFreeze.map(item => {
        return {...item, check: !check}
      })
    })
  }

  return (
    <>
    <section className="section-cart-top">
      <h2 className='cart-title'>장바구니</h2>
        <div className="check-row">
          <div className="check-left">
          <div className={listAllCheck ?'sbCheckBoxOn':'sbCheckBox'} onClick={()=>handleAllCheck(listAllCheck)} />
            <label htmlFor="total-product-check">전체 선택</label>
          </div>
          <div className="check-right">
            <button>선택삭제</button>
            <button>전체삭제</button>
          </div>
        </div>
        </section>
    </>
  )
}
