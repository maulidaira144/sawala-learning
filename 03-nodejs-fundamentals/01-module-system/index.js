const os = require("os");
const path = require("path");

console.log("OS:", os.platform());
console.log("Arsitektur:", os.arch());

const filePath = path.join(
  "src",
  "controllers",
  "articles.controller.js"
);

console.log("Path:", filePath);
console.log("Nama file:", path.basename(filePath));
console.log("Ekstensi:", path.extname(filePath));