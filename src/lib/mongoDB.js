const { MongoClient, ObjectId } = require("mongodb");
const { config } = require("../../config/index");

const DBUSER = encodeURIComponent(config.dbUser);
const DBPASS = encodeURIComponent(config.dbPass);
const DBHOST = encodeURIComponent(config.dbHost);
const DBNAME = encodeURIComponent(config.dbName);

const MONGO_URI = `mongodb+srv://${DBUSER}:${DBPASS}@${DBHOST}/${DBNAME}?retryWrites=true&w=majority`;

//console.info(MONGO_URI);

class MongoLib {
  constructor() {
    this.cliente = new MongoClient(MONGO_URI, { useNewUrlParser: true });
    this.dbName = DBNAME;
  }

  connect() {
    //patron singleton
    if (!MongoLib.connection) {
      MongoLib.connection = new Promise((resolve, reject) => {
        this.cliente.connect((err) => {
          if (err) {
            reject(err);
          }

          console.info("La Conexión a Mongo fue satisfactoria");
          resolve(this.cliente.db(this.dbName));
        });
      });
    }

    return MongoLib.connection;
  }

  getAll(collection, query) {
    return this.connect().then((db) => {
      return db.collection(collection).find(query).toArray();
    });
  }

  get(collection, id) {
    return this.connect().then((db) => {
      return db.collection(collection).findOne({ _id: ObjectId(id) });
    });
  }

  create(collection, data) {
    return this.connect()
      .then((db) => {
        return db.collection(collection).insertOne(data);
      })
      .then((result) => result.insertedId);
  }

  update(collection, id, data) {
    return this.connect()
      .then((db) => {
        return db
          .collection(collection)
          .updateOne({ _id: ObjectId(id) }, { $set: data }, { upsert: true });
      })
      .then((result) => result.upsertedId || id);
  }

  delete(collection, id) {
    console.log("Id en DELETE Mongo -> " + id);
    return this.connect()
      .then((db) => {
        return db.collection(collection).deleteOne({ _id: ObjectId(id) });
      })
      .then(() => id);
  }
}

module.exports = MongoLib;
