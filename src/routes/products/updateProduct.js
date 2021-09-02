const { config } = require("../../config/config");
const { ProductsService } = require("../../services/productsService");
const { responsePrettier } = require("../../utils/responsePrettier");
const productsService = new ProductsService();
const SIZEIDPRODUCT = encodeURIComponent(config.sizeIdProduct);

module.exports.updateProduct = async (event) => {
  const productId = event.pathParameters.productId;
  const product = JSON.parse(event.body);
  if (productId.length != SIZEIDPRODUCT) {
    return responsePrettier(
      "error",
      400,
      `ProductId invalid, size should be ${SIZEIDPRODUCT}`
    );
  }
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
