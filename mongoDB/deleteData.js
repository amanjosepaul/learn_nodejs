const dbConection = require("./dbConection");

const deleteData = async () => {
  let db = await dbConection("products");
  let deletedData = await db.deleteOne({ name: "AMG" });
  console.log("deletedData: ", deletedData);
  //   console.log("db: ", db);
};

deleteData();
