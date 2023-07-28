
import React from 'react'
import {Product,FooterBanner,HeroBanner} from '../../components'
import {client} from '@/lib/client'
import { getProducts,getBanners } from '@/coral-mandrill/sanity-utils';

async function Home(){
let products = await getProducts();
let banners = await getBanners();
  return (
    <div>
      <HeroBanner heroBanner={banners.length && banners[0]}/>
      
      <div className='products-heading'>
        <h1>Best sellers</h1>
      <p>Check out our best products</p>
        
        
        
      </div>
      <div className='products-container'>
          
      {products.map((item)=>
        <Product key={item._id} product={item}/>)}
        </div>
        <FooterBanner footerBanner={banners&& banners[0]}/>
    </div>
  )
}




export default Home
