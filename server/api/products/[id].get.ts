export default defineEventHandler(async (event) => {
  interface Product {
    id: number;
    title: string;
    images: string[];
    price: number;
  }

  const productId = getRouterParam(event, "id") || 0;

  if (!productId)
    return createError({
      status: 500,
      statusText: "Missing product ID parameter.",
    });

  const product = await $fetch<Product>(
    `https://dummyjson.com/products/${productId}?select=id,title,images,price`
  );

  // forcing error for demo
  throw createError({
    status: 500,
    statusText: "Throw a Nuxt Error to handle me!",
  });

  return product;
});
