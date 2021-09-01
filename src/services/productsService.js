const MongoLib = require('../lib/mongo')

class productsService {
  constructor() {
    this.collection = "products";
    this.mongoDB = new MongoLib();
  }

  async getProducts({ descripcion }) {
    const query = descripcion && { descripcion: { $in: descripcion } };
    const products = await this.mongoDB.getAll(this.collection, query);
    return products || [];
  }

  async getProduct({ productId }) {
    const product = await this.mongoDB.get(this.collection, productId);
    return product || {};
  }
  async createProduct({ product }) {
    const createProductId = await this.mongoDB.create(this.collection, product);
    return createProductId;
  }

  async updateMovie({ productId, product } = {}) {
    const updateMovieId = await this.mongoDB.update(
      this.collection,
      productId,
      product
    );
    return updateMovieId;
  }

  async deleteMovie({ productId }) {
    const deleteProductId = await this.mongoDB.delete(this.collection, productId);
    return deleteProductId;
  }
}

module.exports = productsService;