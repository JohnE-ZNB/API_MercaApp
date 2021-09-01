const ProductService = require('../../services/productsService')


module.exports.getProducts = async event => {
  const { descripcion } = req.query;
  try {
    const productsAll = await ProductService.getProducts({descripcion});

    res.status(200).json({
      data: productsAll,
      message: "Listado de Productos",
    });
  } catch (error) {
    next(error);
  }
}