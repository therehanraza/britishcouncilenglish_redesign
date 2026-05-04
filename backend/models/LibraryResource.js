import mongoose from 'mongoose';

const libraryResourceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
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

const LibraryResource = mongoose.model('LibraryResource', libraryResourceSchema);

export default LibraryResource;
