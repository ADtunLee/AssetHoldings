var express = require("express");
var router = express.Router();
var searchController = require("../controllers/search.controller");
router.get("/suggestion", async (req, res) => {
  var keyword = req.query.keyword || "";
  var type = req.query.type || "";
  var limit = parseInt(req.query.limit) || 10;
  var listSearchSuggestion = await searchController.Suggestion(
    keyword,
    type,
    limit
  );
  return res.send(listSearchSuggestion);
});
module.exports = router;
