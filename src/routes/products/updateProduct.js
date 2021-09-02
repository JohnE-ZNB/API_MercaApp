const { ProductsService } = require("../../services/productsService");
const { responsePrettier } = require("../../utils/responsePrettier");
const productsService = new ProductsService();

module.exports.updateProduct = async (event) => {
  const productId = event.pathParameters.productId;
  const product = JSON.parse(event.body);
  try {
    const updateProductId = await productsService.updateProduct({
      productId,
      product,
    });
    return responsePrettier(
      "success",
      200,
      updateProductId,
      "Producto Actualizado"
    );
  } catch (error) {
    return responsePrettier("error", 206, error);
  }
};
