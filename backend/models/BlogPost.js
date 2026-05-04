import mongoose from 'mongoose';

const blogPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    text: {
      type: String,
      required: true,
      trim: true,
    },
    image: String,
    to: String,
    order: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

export default BlogPost;
