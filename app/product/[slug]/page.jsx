

import { getProducts } from "@/coral-mandrill/sanity-utils";

import { Product } from "@/components";
import Purchase from "@/components/Purchase";
import Images from "@/components/Images";
export default async function Page({ params }) {
   const products = await getProducts();
  var product =0;
  function isEqual(){
    for(let i =0 ;i<products.length;i++){
      if(products[i].slug == params.slug){
         product = products[i]
         
      }
    }
  }

  
    
  
  return (
  
    <div>
        <div className="product-detail-container">
          { isEqual()}
          
          <Images product={product}/>
          
          <Purchase product={product}/>
        </div>
        <div className="maylike-products-wrapper">
          <h2>You may also Like</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {products.map((item)=>(<Product key={item._id} product={item}/>))}
            </div>
          </div>
        </div>
    </div>
    
    )
  }