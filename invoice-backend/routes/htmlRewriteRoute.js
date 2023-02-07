const express = require("express");
const { htmltoJson, htmlRewrite } = require("../service/htmlRewrite");

const router = express.Router();

router.get("/", async (_req, res) => {
  try {
    const result = await htmlRewrite();
    res.status(200).send("Status:" + result);
  } catch (e) {
    res.status(500).send("Some error occured", e);
  }
});

router.get("/json", async (_req, res) => {
  try {
    const json = await htmltoJson();
    res.status(200).send(JSON.stringify(json));
  } catch (e) {
    res.status(500).send("Some error occured", e);
  }
});

module.exports = router;
