const { config } = require("../../config/config");
const { ProductsService } = require("../../services/productsService");
const { responsePrettier } = require("../../utils/responsePrettier");
const productsService = new ProductsService();
const SIZEIDPRODUCT = encodeURIComponent(config.sizeIdProduct);

module.exports.getProduct = async (event) => {
  const productId = event.pathParameters.productId;
  console.log("productId.length");
  console.log(productId.length);
  console.log(typeof productId.length);
  console.log(typeof SIZEIDPRODUCT);
  if (productId.length != SIZEIDPRODUCT) {
     return responsePrettier(
       "error",
       400,
       `ProductId invalid, size should be ${SIZEIDPRODUCT}`
     );
  }
  try {
    const product = await productsService.getProduct({ productId });
    return responsePrettier("success", 200, product, "Detalle de producto");
  } catch (error) {
    console.log("RoutesGetProduct");
    console.log(error);
    return responsePrettier("error", 206, error);
  }
};
