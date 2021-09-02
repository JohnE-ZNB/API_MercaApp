const {ProductsService} = require("../../services/productsService");
const {responsePrettier} = require("../../utils/responsePrettier");

const productsService = new ProductsService();

module.exports.getProducts = async event => {
  try {
    const productsAll = await productsService.getProducts();
    return responsePrettier("success", 200, productsAll, "Listado de Productos")
  } catch (error) {
    console.log(error)
    return responsePrettier("error", 206, error);
  }
}