const express = require("express");
const router = express.Router();
const cheerio = require("cheerio");
const httpClient = require("../axios/axios");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/crawl", async (req, res) => {
  try {
    const response = await httpClient.get("/");
    const html = response.data;
    const $ = cheerio.load(html);
    const array = $("#mntl-taxonomysc-article-list_1-0", html);
    array.children().each((innerNode) => console.log(innerNode));
    res.send("succees");
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
