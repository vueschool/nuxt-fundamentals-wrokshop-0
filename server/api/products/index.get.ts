export default defineEventHandler(async () => {
  interface Product {
    id: number;
    title: string;
    images: string[];
    price: number;
  }

  type apiResponse = {
    products: Product[];
  };

  const { products } = await $fetch<apiResponse>(
    "https://dummyjson.com/products?limit=3&skip=10&select=id,title,images,price"
  );

  return products;
});
