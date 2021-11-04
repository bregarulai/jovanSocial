const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Using express router");
});

module.exports = router;
