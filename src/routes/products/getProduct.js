const { ProductsService } = require("../../services/productsService");
const { responsePrettier } = require("../../utils/responsePrettier");
const productsService = new ProductsService();


module.exports.getProduct = async event => {
  const productId = event.pathParameters.productId;
  try {
    const product = await productsService.getProduct({ productId });
    return responsePrettier("success", 200, product, "Detalle de producto");
  } catch (error) {
    return responsePrettier("error", 206, error);
  }
};
