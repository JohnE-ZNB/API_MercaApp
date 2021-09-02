const { config } = require("../../config/config");
const { ProductsService } = require("../../services/productsService");
const { responsePrettier } = require("../../utils/responsePrettier");
const productsService = new ProductsService();


module.exports.deleteProduct = async (event) => {
    const productId = event.pathParameters.productId;
    if (productId.length !== SIZEIDPRODUCT) {
      responsePrettier("error", 400, { validation: "[productId] length 24" });
    }
    try {
      const product = await productsService.deleteProduct({ productId });
      return responsePrettier("success", 200, product, "Producto Eliminado");
    } catch (error) {
      console.log("RoutesDelete");
      console.log(error);
      return responsePrettier("error", 206, error);
    }
};
