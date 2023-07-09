import React from 'react'
import Link from 'next/link'

async function  Product({product}){
 
  return (
    <div>
      <Link href={`/product/${product.slug}`}>
        <div className='product-card'>
          
          <img src={`${product.image[0].asset.url}`} alt="product" width={250} height={250} className='product-image'/>

          <p className='product-name'>{product.name}</p>
          <p className='product-price'>${product.price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product
