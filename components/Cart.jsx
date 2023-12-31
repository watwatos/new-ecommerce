'use client'
import React,{useRef} from 'react'
import Link from 'next/link'
import { AiOutlineMinus,AiOutlinePlus,AiOutlineLeft,AiOutlineRight,AiOutlineShopping } from 'react-icons/ai'
import {TiDeleteOutline} from 'react-icons/ti'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useStateContext } from '@/context/StateContext'




const Cart = () => {

    const cartRef = useRef();
    const {totalPrice,totalQuantities,cartItems,setShowCart,toggleCartItemQuantity,onRemove} = useStateContext();



  return (
    <div className='cart-wrapper' ref={cartRef}>
       <ToastContainer/>
       <div className='cart-container'>
        <button
        type='button'
        className='cart-heading'
        onClick={()=>{
            setShowCart(false)
        }}><AiOutlineLeft/>
        <span className='heading'>Your Cart</span>
        <span className='cart-num-items'>({totalQuantities} items)</span>
        
        </button>

        {cartItems.length < 1 && (
            <div className='empty-cart'>
                <AiOutlineShopping size={150}/>
                <h3>Your shopping bag is empty</h3>
                <Link href='/'>
                    <button
                    type='button'
                    onClick={()=>{setShowCart(false)}}
                    className='btn'
                    >
                        continue shopping
                    </button>
                </Link>
            </div>
        )}

        <div className='product-container'>
            {cartItems.length >= 1 && cartItems.map((item,index)=>(
                <div className='product' key={item._id}>
                    <img src={item?.image[0].asset.url} className='cart-product-image'/>
                <div className='item-desc'>
                    <div className='flex top'>
                        <h5>{item.name}</h5>
                        <h4>${item.price}</h4>
                    </div>
                    <div className='flex bottom'>
                        <div>
                            <p className='quantity-desc'>
                            <span className="minus" onClick={()=>toggleCartItemQuantity(item.slug,'dec')}>
                  <AiOutlineMinus/>
                </span>
                <span className="num">
                  {item.quantity}
                </span>
                <span className="plus" onClick={()=>toggleCartItemQuantity(item.slug,'inc')}>
                  <AiOutlinePlus/>
                </span>
                            </p>
                        </div>
                        <button type='button' className='remove-item'
                        onClick={()=>onRemove(item)}
                        >
                            <TiDeleteOutline/>
                        </button>
                    </div>
                </div>
               
                </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
            <div className='cart-bottom'>
                <div className='total'>
                    <h3>subtotal: </h3>
                    <h3>${totalPrice}</h3>
                </div>
                <div className='btn-container'>
                    <button type='button' className='btn' onClick={''}>
                        Checkout
                    </button>
                </div>
            </div>
        )}
       </div>
    </div>
  )
}

export default Cart
