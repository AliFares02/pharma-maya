const fs = require("fs");
const path = require("path");

const src = path.resolve(__dirname, "sitemap.xml");
const dest = path.resolve(__dirname, "dist", "sitemap.xml");

fs.copyFile(src, dest, (err) => {
  if (err) {
    console.error("Error copying sitemap.xml:", err);
  } else {
    console.log("sitemap.xml was copied successfully!");
  }
});

const robotsSrc = path.resolve(__dirname, "robots.txt");
const robotsDest = path.resolve(__dirname, "dist", "robots.txt");

fs.copyFile(robotsSrc, robotsDest, (err) => {
  if (err) {
    console.error("Error copying robots.txt:", err);
  } else {
    console.log("robots.txt was copied successfully!");
  }
});
