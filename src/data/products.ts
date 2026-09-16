export type Product = { id:string; name:string; category:string; description:string; image:string; price:string; affiliateUrl:string };
export const products: Product[] = [
  {id:'fashion', name:'Fashion finds', category:'Fashion', description:'Anime-inspired pieces for your everyday rotation.', image:'/assets/shop/fashion.webp', price:'Curated link', affiliateUrl:''},
  {id:'merch', name:'Merchandise picks', category:'Merchandise', description:'Small treasures for the shelf, desk, or bag.', image:'/assets/shop/merchandise.webp', price:'Curated link', affiliateUrl:''},
  {id:'accessories', name:'Little accessories', category:'Accessories', description:'Finishing touches with character.', image:'/assets/shop/accessories.webp', price:'Curated link', affiliateUrl:''},
  {id:'parfum', name:'Parfum discoveries', category:'Parfum', description:'Scents for a softer kind of self-expression.', image:'/assets/shop/parfum.webp', price:'Curated link', affiliateUrl:''},
];
