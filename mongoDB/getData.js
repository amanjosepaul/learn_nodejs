const dbConnection = require("./dbConection");

const getData = async (filterBy) => {
  let data = await dbConnection("products");
  data = await data.find(filterBy).toArray();
  console.log("data: ", data);
};

getData({});
