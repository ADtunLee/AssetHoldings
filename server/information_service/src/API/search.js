var express = require("express");
var router = express.Router();
var res_searchBL = require("../BL/res_search");
var post_BL = require("../BL/post");
var address_BL = require("../BL/res_address");
var product_BL = require("../BL/product");
router.get("/suggestion", async (req, res) => {
  try {
    var list_string_search;
    if (req.query.keyword) {
      list_string_search = await res_searchBL.find(req.query.keyword);
    } else {
      list_string_search = [];
    }
    return res.json(list_string_search);
  } catch {
      return res.json([])
  }
 
});

router.get("/result", async (req, res) => {
  let ListPost = [];
  if (req.query.keyword) {
    ListPost = await res_searchBL.SearchResult(req.query.keyword);
  }
  return res.json(ListPost);
});
//GET POST (lookup user)
// keyword, limit, offset, 'type = post'

router.get("/get_post_by_keyword", async (req, res) => {
  var keyword = req.query.keyword || "";
  var limit = Number.parseInt(req.query.limit) || 10;
  var page = Number.parseInt(req.query.page) || 1;

  let list_PostID = await res_searchBL.GetPostByKeyword(
    keyword,
    limit,
    page,
    "post"
  );
  list_PostID = list_PostID.map(a => a._id);
  let list_Post = await post_BL.GetByListID(list_PostID, limit);
  return res.json(list_Post);
});

// lấy tất cả danh sách các từ khóa
//INPUT : limit (giới hạn) page, keyword, type (post,res_address...). type/keyword = null nếu lấy tất cả
router.get("/all", async (req, res) => {

  //get query
  var keyword = req.query.keyword || "";
  var type = req.query.type || "";
  var limit = Number.parseInt(req.query.limit) || 8;
  var page = Number.parseInt(req.query.page) || 1;


  let list_search = await res_searchBL.GetSearchByKeyword(
    keyword ,
    limit,
    page,
    type
  );

  var list_addressID = [];
  var list_productID = [];
  var list_postID = [];
  list_search.forEach(element => {
    switch (element.name) {
      case "res_address":
        list_addressID.push(element.rel_id);
        break;
      case "product":
        list_productID.push(element.rel_id);
        break;
      case "post":
        list_postID.push(element.rel_id);
        break;
    }
  });

  let list_Post = await post_BL.GetByListID(list_postID, limit);
  let list_address = await address_BL.GetByListID(list_addressID, limit);
  let list_product = await product_BL.GetByListID(list_productID, limit);

  list_Post.forEach(post => {
    post.type = "post";
  });

  list_address.forEach(address => {
    address.type = "res_address";
  });

  list_product.forEach(address => {
    address.type = "product";
  });
  return res.json([...list_Post, ...list_address, ...list_product]);
});

router.get("/count_all_by_keyword", async (req, res) => {
  let num_Post = await res_searchBL.CountByKeyword(req.query.keyword || "", "");
  return res.json(num_Post);
});

router.get("/count_by_keyword", async (req, res) => {
  let num_Post = await res_searchBL.CountByKeyword(
    req.query.keyword || "",
    req.query.type || ""
  );
  return res.json(num_Post);
});
module.exports = router;
