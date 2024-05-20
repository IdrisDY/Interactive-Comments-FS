const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    currentUser: {
      image: {
        png: {
          type: String,
          required: true,
        },
        webp: {
          type: String,
          required: true,
        },
      },
      username: {
        type: String,
        required: true,
      },
    },
    comments: [
      {
        id: {
          type: Number,
        },
        content: {
          type: String,
        },
        date: { type: String, default: "" },
        score: {
          type: Number,
        },
        user: {
          image: {
            png: {
              type: String,
            },
            webp: {
              type: String,
            },
          },
          username: {
            type: String,
          },
        },
        replies: [
          {
            id: {
              type: Number,
            },
            content: {
              type: String,
            },
            date: { type: String, default: "" },
            score: {
              type: Number,
            },
            replyingTo: {
              type: String,
            },
            user: {
              image: {
                png: {
                  type: String,
                },
                webp: {
                  type: String,
                },
              },
              username: {
                type: String,
              },
            },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comments", commentSchema);
