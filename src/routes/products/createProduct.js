const { ProductsService } = require("../../services/productsService");
const { responsePrettier } = require("../../utils/responsePrettier");
const productsService = new ProductsService();

module.exports.createProduct = async event => {
  let product;
  if (typeof event.body == "object") {
    product = event.body;
  } else {
    product = JSON.parse(event.body);
  }
  try {
    const productId = await productsService.createProduct({ product });
    return responsePrettier("success", 201, productId, "Producto Creado");
  } catch (error) {
    console.log(error)
    return responsePrettier("error", 206, error);
  }
};
