const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "files");
const filePath = `${dirPath}/nameChanged.txt`;

// for (i = 1; i <= 4; i++) {
//   fs.writeFileSync(`${dirPath}/testFile${i}.txt`, `File: ${i}`);
// }

// //  Read file directory

// fs.readdir(dirPath, (err, files) => {
//   console.log(files);
// });

// // ---------------------CURD Operations----------------------------

// // --------------------Create new file

// fs.writeFileSync(`${dirPath}/testFile.txt`, `Test File`);

// // ----------------------Read file

// fs.readFile(filePath, "utf8", (err, item) => {
//   console.log(item);
// });

//  //--------------------- update file

// fs.appendFile(filePath, " And we will learn node js", (err) => {
//   if (!err) console.log(" File updated successfully");
// });

// // ----------------------Rename file

// fs.rename(filePath, `${dirPath}/aman.txt`, (err) => {
//   err
//     ? console.log("Error print:---------", err)
//     : console.log("File renamed successfully");
// });

// // ----------------------Delete file

// fs.unlinkSync(`${dirPath}/aman.txt`);
