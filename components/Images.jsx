'use client'
import React,{useState} from 'react'

const Images = ({product}) => {
    const [index,setIndex] = useState(0);
  return (
    <div>
      <div>
            <div className="image-container">
              <img src={product.image[index].asset.url} alt="" className="product-detail-image"/>
            </div>
            <div className="small-images-container">
              
              { product.image?.map((item,i)=>(
                <img key={item._id} src={item.asset.url} className={i===index ? 'small-image selected-image':'small-image'} onMouseEnter={()=>setIndex(i)} />
              ))}
              
            </div>
          </div>
    </div>
  )
}

export default Images
