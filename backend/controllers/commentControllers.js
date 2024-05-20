const commentsModel = require("../models/commentsModel");
const getAllComments = async (req, res) => {
  const comments = await commentsModel.find({})
  console.log(comments)
  return res.json(comments)
};
module.exports = {
  getAllComments, 
};
