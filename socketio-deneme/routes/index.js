const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.send({ response: "Hayattayım. Çalışıyor" }).status(200);
});

router.get("/deneme", (req, res) => {
  res.send("<h1>deneme</h1>").status(200);
});



module.exports = router;