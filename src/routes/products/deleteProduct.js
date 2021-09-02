const { ProductsService } = require("../../services/productsService");
const { responsePrettier } = require("../../utils/responsePrettier");
const productsService = new ProductsService();

module.exports.deleteProduct = async (event) => {
  const productId = event.pathParameters.productId;
  try {
    const product = await productsService.deleteProduct({ productId });
    return responsePrettier("success", 200, product, "Producto Eliminado");
  } catch (error) {
    return responsePrettier("error", 206, error);
  }
};
