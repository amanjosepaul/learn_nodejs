const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://localhost:27017");
const database = "e-comm";

const dbConnection = async (collection) => {
  let connect = await client.connect();
  let db = connect.db(database);
  return db.collection(collection);
};

module.exports = dbConnection;
