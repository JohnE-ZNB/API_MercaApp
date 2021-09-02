const { config } = require("../../config/config");
const { ProductsService } = require("../../services/productsService");
const { responsePrettier } = require("../../utils/responsePrettier");
const productsService = new ProductsService();
const SIZEIDPRODUCT = encodeURIComponent(config.sizeIdProduct);

module.exports.getProduct = async (event) => {
  const productId = event.pathParameters.productId;
  if (productId.length !== SIZEIDPRODUCT) {
    responsePrettier("error", 400, { validation: "[productId] length 24" });
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
