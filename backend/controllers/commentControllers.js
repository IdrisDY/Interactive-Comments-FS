const mongoose = require('mongoose')

const commentsModel = require("../models/commentsModel");
const getAllComments = async (req, res) => {
  const comments = await commentsModel.find({});
  console.log(comments);
  return res.json(comments);
};
const createReply = async (req, res) => {
  try {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({error:'No such comments'})
  }
  const comment = await commentsModel.find({_id:id})
    const reply = await commentsModel.findByIdAndUpdate( 
      { _id: id },
      { "$push": { replies: req.body } },
      { new: true }
    );
    if (!reply) {
      return res.status(404).json({ error: "Comment not found" });
    }
    console.log(comment);
    res.json(comment);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
module.exports = {
  getAllComments,
  createReply,
};
