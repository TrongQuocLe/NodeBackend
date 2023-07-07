const fs = require("fs");
const path = require("path");
const { pathToFileURL } = require("url");

// // Create folder
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   console.log("Folder created...");
// });

// // Create file
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   " new noode text",
//   (err) => {
//     if (err) throw err;
//     console.log("File written...");
//   }
// );

// Read file
fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Rename file
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "hello2.txt"),
  (err, data) => {
    if (err) throw err;
    console.log();
  }
);
