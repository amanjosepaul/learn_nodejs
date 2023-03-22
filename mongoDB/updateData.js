const dbConection = require("./dbConection");

const updateData = async () => {
  let db = await dbConection("products");
  let updatdeData = await db.updateOne(
    { brand: "Mercedes" },
    { $set: { color: "Black" } }
  );
  console.log("updatdeData: ", updatdeData);
};

updateData();
