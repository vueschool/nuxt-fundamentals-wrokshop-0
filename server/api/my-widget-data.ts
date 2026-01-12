export default defineEventHandler(() => {
  throw createError({
    statusCode: 500,
    statusMessage: "Something went wrong",
    message: "Internal server error",
  });
  return {
    message: "Hello World",
  };
});
