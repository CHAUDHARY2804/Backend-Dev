const fs = require("fs");


fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading file:", err);
    return;
  }


  const words = data.trim().split(/\s+/);
  const wordCount = words.length;

 
  fs.writeFile("output.txt", `Word Count: ${wordCount}`, (err) => {
    if (err) {
      console.log("Error writing file:", err);
      return;
    }
    console.log("Word count written to output.txt");
  });
});
