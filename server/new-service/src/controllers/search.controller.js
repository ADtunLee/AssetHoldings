const ResSearchString = require("../models/res_search_string.model");
const Post = require("../models/post.model");
exports.Suggestion = async (keyword, type, limit) => {
  return await ResSearchString.aggregate([
    {
      $match: {
        search: new RegExp(keyword, "i"),
        name: new RegExp(type, "i")
      }
    },
    { $limit: limit }
  ]);
};

exports.All = async (keyword, type, limit, page) => {
  return await ResSearchString.aggregate([
    {
      $match: {
        search: new RegExp(keyword, "i"),
        name: new RegExp(type, "i")
      }
    },
    { $skip: (page - 1) * limit },
    { $limit: limit }
  ]);
};
