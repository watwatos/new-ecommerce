import   { createClient }  from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId:"xfunr0y0",
    dataset:"production",
    apiVersion:"2023-07-07",
    useCdn:true,
    token:process.env.NEXT_PUBLIC_SANITY_TOKEN
});



const builder = imageUrlBuilder(client)
export  function urlFor(source) {
  return builder.image(source).auto('format')

}
