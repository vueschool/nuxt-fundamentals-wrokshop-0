export default defineEventHandler(async (event) => {
  interface Product {
    id: number;
    title: string;
    images: string[];
    price: number;
  }

  type apiResponse = {
    product: Product;
  };

  const productId = getRouterParam(event, "id") || 0;

  if (!productId)
    return createError({
      status: 500,
      statusText: "Missing product ID parameter.",
    });

  const product = await $fetch<apiResponse>(
    `https://dummyjson.com/products/${productId}?select=id,title,images,price`
  );

  return product;
});
