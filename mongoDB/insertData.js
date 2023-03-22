const dbConection = require("./dbConection");

const insertData = async () => {
  let db = await dbConection("products");
  const insertedData = await db.insertMany([
    { name: "Seltos", brand: "Kia", price: 1400000, category: "suv" },
    { name: "Nexon", brand: "Tata", price: 700000, category: "suv" },
  ]);
  console.log("insertedData: ", insertedData);
};

insertData();
