import { client } from "@/lib/client"


export async function getProducts(){
   return client.fetch(
        `*[_type == "product"]{
          image[]{
            asset->{url}
          },
            
            name,
            "slug":slug.current,
            price,
            details

        }`
    )
}

export async function getBanners(){
    return client.fetch(
         `*[_type == "banner"]{
            "image": image.asset->url,
            buttonText,
            smallText,
            midText,
            largeText1,
            largeText2,
            buttonText,
            product,
            desc,
            discount,
            saleTime

         }`
     )
 }